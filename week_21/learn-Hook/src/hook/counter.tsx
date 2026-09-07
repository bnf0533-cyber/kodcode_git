import { useState } from "react";

interface useCounterType{
    count : number;
    increment : () => void;
    decrement : () => void;
    reset : () => void; 
}

export function useCounter(initial : number = 0, step : number = 1  ): useCounterType {
    const [count, setCount] = useState<number>(initial)
    const increment = () => setCount(p => p + step)
    const decrement = () => setCount(p => p - step)
    const reset = () => setCount(initial)
    return {count , increment , decrement , reset}
}