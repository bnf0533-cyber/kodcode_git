import { useCounter } from "../hook/counter";

export default function BigCounter() {
    const { count, decrement, increment, reset } = useCounter(100, 10);

    return (
        <div>
            <h3>Big Counter: {count}</h3>
            <button onClick={increment}>+10</button>
            <button onClick={decrement}>-10</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
