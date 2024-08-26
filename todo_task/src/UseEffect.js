import React, { useState, useEffect } from 'react';

const expensiveFunction = (value) => {
  return value * 2;
};

const anotherPriceyFunction = (value) => {
  return value + 10;
};

const UseEffect = ({ listOfItems, props }) => {
  const [memoizedList, setMemoizedList] = useState([]);

  useEffect(() => {
    const updatedList = listOfItems.map(item => ({
      ...item,
      itemProp1: expensiveFunction(props.first),
      itemProp2: anotherPriceyFunction(props.second),
    }));
    setMemoizedList(updatedList);
  }, [listOfItems, props.first, props.second]);

  return (
    <div>
      {memoizedList.map((item, index) => (
        <li key={index}>
          <div>Item Prop 1: {item.itemProp1}</div>
          <div>Item Prop 2: {item.itemProp2}</div>
        </li>
      ))}
    </div>
  );
};

export default UseEffect;
