import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url: RequestInfo) => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return { data, loading, error };
};
export { useFetch };