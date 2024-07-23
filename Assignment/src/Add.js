import { useState } from "react";
function Add(){
    let [firstnum, setfirstnum] = useState(0);
    let [secondnum, setsecondnum] = useState(0);
    let [sum, setsum] = useState(0);
    function firstitem(e){
        setfirstnum(e.target.value);
    }
    function seconditem(e){
        setsecondnum(e.target.value);
    }
    function add(){
        setsum(Number(firstnum) + Number(secondnum));
    }
    return(
        <div className="Add">
            <h1>Add your Numbers</h1>
            <input type="number" name="firstitem" value={firstnum} onChange={firstitem}/>
            <input type="number" name="seconditem" value={secondnum} onChange={seconditem}/>
            <button onClick={add}>Add</button>
            <h3>Solution: {sum}</h3>
        </div>
    );
}
export default Add;