import { useEffect, useState } from "react";
export default function useLocalStorage(key: string, defaultValue = "") {
    const [value, setValue] = useState(() => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue] as const;
}

export function useFetch(url: string, options: RequestInit = {}) {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url, options)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((e) => setError(e));
    }, []);
    return { data, setData, error, setError };
}
