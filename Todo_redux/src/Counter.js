import { useState } from "react";
function Counter(){
    let [stateCount, setstateCount] = useState(0);
    function increase(){
        setstateCount(stateCount+1);
    }
    function decrease(){
        setstateCount(stateCount-1);
    }
    function reset(){
        setstateCount(0);
    }
    return(
        <div>
            <h1>{stateCount}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter;