import { useState } from "react";
function Hobby(){
    let hobbyInitialValue = ['Cook',"Gym","Homework","Eat"];
    let [hobbies,sethobbies] = useState(hobbyInitialValue);
    let [hobbyEntered, sethobbyEntered] = useState("Enter Hobby");
    function changehobbyEntered(e){
        sethobbyEntered(e.target.value);
    }
    function addhobby(){
        let newhobbyArr = [...hobbies, hobbyEntered];
        sethobbies(newhobbyArr);
    }
    function deletehobby(indexToDelete){
        let newhobbiess = hobbies.filter(function(val, index){
            if(indexToDelete == index) return false;
            return true;
        });
        sethobbies(newhobbiess);
    }
    function clear(){
        let hobbylist = [];
        sethobbies(hobbylist);
    }
    return(
        <div className="Hobby">
            <h1>Hobbies</h1>
            <input type="text" name="todoitem" value={hobbyEntered} onChange={changehobbyEntered}/>
            <button onClick={addhobby}>Add</button>
            <button onClick={clear}>Clear</button>
            {hobbies.map(function(val, index){
                return <div>
                    {val}
                    <button onClick={function(){
                        deletehobby(index);
                    }}>Delete</button>
                </div>;
            })}
        </div>
    );
}
export default Hobby;