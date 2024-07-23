import { useState } from "react";
function Calculator(){
    let [degree, setdegree] = useState(0);
    let [solution, setsolution] = useState(0);
    function degrees(e){
        setdegree(e.target.value);
    }
    function sin_fun(){
        setsolution(Math.round(Math.sin(degree*Math.PI/180)));
    }
    function cos_fun(){
        setsolution(Math.round(Math.cos(degree*Math.PI/180)));
    }
    function tan_fun(){
        setsolution(Math.round(Math.tan(degree*Math.PI/180)));
    }
    return(
        <div className="Cal">
            <h1>Convert your Degrees</h1>
            <input type="number" name="degree" value={degree} onChange={degrees}/>
            <button onClick={sin_fun}>Sin</button>
            <button onClick={cos_fun}>Cos</button>
            <button onClick={tan_fun}>Tan</button>
            <h3>Solution: {solution}</h3>
        </div>
    );
}
export default Calculator;