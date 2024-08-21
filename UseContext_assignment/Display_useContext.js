import React, { useContext } from 'react';
import { NumberContext } from './App';

function UseContextDisplay() {
    const value = useContext(NumberContext);
    return <div>The answer is {value}.</div>;
}
export default UseContextDisplay;