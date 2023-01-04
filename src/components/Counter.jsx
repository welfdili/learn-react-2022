import { useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            <hr />
            <div class="row text-center">
                <div class="col">
                    <span>My Counter</span>
                </div>
                <div class="col">
                    <button className="btn btn-success">{count}</button>
                </div>
                <div class="col">
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Counter