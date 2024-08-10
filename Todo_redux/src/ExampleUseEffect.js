import {useEffect,useState} from "react";

const ExampleUseEffect = ()=>{
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(22);
    useEffect(()=>{
        console.log("I ran once");
        const destructor = () => {
            alert("Dont Close or u will be hacked");
        };
        return destructor;
    }, [])
    useEffect(()=>{
        console.log(`Age Changed to ${age}`);
    }, [age]);
    const increase = ()=>{
        setCount(count+1);
    }
    const increaseAge = ()=>{
        setAge(age+1);
        console.log(`Age before is ${age}`);
    }
    return(
        <div>
            <h1>useEffect example</h1>
            <h3>{count}</h3>
            <h3>{age}</h3>
            <button onClick={increase}>increase</button>
            <button onClick={increaseAge}>increase age</button>
        </div>
    );
};
export default ExampleUseEffect;