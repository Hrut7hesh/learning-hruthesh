import {useState, useMemo} from 'react';
const UseMemoHookExample = () =>{
    const [increment, setIncrement] = useState(0);
    const [initialVal, setInitialVal] = useState(1);
    console.log("Components function called again");
    const complexCalculation = (mul=1)=>{
        console.log(`initial sum value ${mul}`);
        for(let i=1;i<4;i++){
            mul=mul*i;
            console.log("ran");
        }
        console.log(`mul calculated again = ${mul}`);
        return mul;
    };
    const increase = ()=>{
        setIncrement(increment+1);
    };
    const increaseInitialval=()=>{
        setInitialVal(initialVal+1);
    };
    const optimizeComplexCalculation = useMemo(()=>complexCalculation(initialVal),[initialVal])
    // const optimizeComplexCalculation = complexCalculation(2);
    return(
        <div>
            <button onClick={increase}>Increment</button>
            <div>
                {increment}
            </div>
            <br/>
            <button onClick={increaseInitialval}>Increase Intial Value</button>
            <div>
                initial val={initialVal}
            </div>
            <p>value={optimizeComplexCalculation}</p>
        </div>
    )
}
export default UseMemoHookExample;