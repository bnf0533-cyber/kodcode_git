import { useCounter } from "../hook/counter";

export default function SmallerCounter() {
    const {count ,decrement ,increment ,reset}= useCounter(1,0);

    return (
        <div>
            <h3>Small Counter: {count}</h3>
            <button onClick={increment}>+10</button>
            <button onClick={decrement}>-10</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
