import React from 'react'

const Login = () => {
    return (
        <div className="wrapper px-2 w-full">
        <form
           action=""
           className="max-w-sm bg-gray-100 px-3 py-5 rounded shadow-lg my-10 m-auto"
        >
           <div className="flex flex-col space-y-3">
              <div
                 className="flex items-center bg-white border border-gray-100 rounded px-2"
              >

                 <input
                    type="number"
                    placeholder="Card number"
                    className="w-full py-2 px-1 placeholder-indigo-400 outline-none placeholder-opacity-50"
                 />
              </div>
              <div
                 className="flex items-center bg-white border border-gray-100 rounded px-2"
              >

                 <input
                    type="number"
                    placeholder="PIN"
                    className="w-full py-2 px-1 placeholder-indigo-400 outline-none placeholder-opacity-50"
                 />
              </div>
              <button
                 type="submit"
                 className="text-white bg-indigo-500 px-4 py-2 rounded"
              >
                 Submit
              </button>
           </div>
        </form>
     </div>
    )
}

export { Login }