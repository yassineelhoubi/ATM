import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [ccn, setCcn] = useState(0);
    const [PIN, setPIN] = useState(0);
    const login = () => {
        axios.post(`http://localhost:3030/user/auth`, {
            ccn,
            PIN
        }).then(res => {
            if (res.data.length === 0) {
                alert("Wrong Credentials")
                return
            }
            localStorage.setItem("user", JSON.stringify(res.data))
            navigate("/home")

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="wrapper px-2 w-full">
            <div
                className="max-w-sm bg-gray-100 px-3 py-5 rounded shadow-lg my-10 m-auto"
            >
            <div className="flex flex-col space-y-3">
                <div
                    className="flex items-center bg-white border border-gray-100 rounded px-2"
                >

                    <input
                        onChange={(e) => setCcn(+e.target.value)}
                        type="number"
                        placeholder="Card number"
                        className="w-full py-2 px-1 placeholder-indigo-400 outline-none placeholder-opacity-50"
                    />
                </div>
                <div
                    className="flex items-center bg-white border border-gray-100 rounded px-2"
                >

                    <input
                        onChange={(e) => setPIN(+e.target.value)}
                        type="number"
                        placeholder="PIN"
                        className="w-full py-2 px-1 placeholder-indigo-400 outline-none placeholder-opacity-50"
                    />
                </div>
                <button

                    onClick={login}
                    className="text-white bg-indigo-500 px-4 py-2 rounded"
                >
                    Submit
                </button>
            </div>
            </div>
        </div>
    )
}

export { Login }