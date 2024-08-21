import React, { useState } from 'react';
import Display from './DisplayConsumer';
import UseContextDisplay from './Display_useContext';
import HeaderBar from './NestedConsumers';
import UseContextHeaderBar from './NestedUseContext';
import UseMemo from './UseMemo';

export const NumberContext = React.createContext();
export const CurrentUser = React.createContext();
export const Notifications = React.createContext();

function App() {
  const listOfItems = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'PC' },
  ];

  const props = {
    first: 3, 
    second: 2, 
  };

  return (
    <NumberContext.Provider value={42}>
    <CurrentUser.Provider value={{name:"Hruthesh"}}>
    <Notifications.Provider value={[1,2,3,4,5]}>

    <div className="App">
      <Display />
      <UseContextDisplay />
      <HeaderBar />
      <UseContextHeaderBar />
      <UseMemo listOfItems={listOfItems} props={props}/>
    </div>
    </Notifications.Provider>
    </CurrentUser.Provider>
    </NumberContext.Provider>
  );
}
export default App;
