import React, { useState } from "react";

const Counter = () => {
    const [count , setCount] = useState(0);

    return (<div>
        {count > 10 && <div>wiinew</div>}
        <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>)
};

export default Counter;
