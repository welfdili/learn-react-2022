import { useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            <hr />
            <div className="row text-center">
                <div className="col">
                    <span>My Counter</span>
                </div>
                <div className="col">
                    <button className="btn btn-success">{count}</button>
                </div>
                <div className="col">
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Counter