import React from "react";
import { userStore } from "../../store/userStore";

export default function Counter() {
    console.log("Counter render");
    const counter = userStore((s) => s.counter);
    const inc = userStore((s) => s.inc);
    const dec = userStore((s) => s.dec);

    return (
        <div>
            {counter}
            <button onClick={() => inc()}>inc</button>
            <button onClick={() => dec()}>dec</button>
        </div>
    );
}
