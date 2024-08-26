// import './App.css';
import Menu from './Menu';
import Footer from './Footer';
import Container from './Container';
import Counter from './Counter';
import Todo from './Todo';
import Hobby from './Hobby';
import Add from './Add';
import Calculator from './Calculator';
import Student from './Student';
import Login from './Login';
import Item from './Item';
import Genderize from './Genderize';
import Github from './Github';
import TodoDetails from './TodoDetails';
import TodoDetailsEdit from './TodoDetailsEdit';
import Fake from './Fake';
import ProductDetailsComponent from './ProductDetailsComponent';
import GitApp from './Git_api';
import ExampleUseEffect from './ExampleUseEffect';
import { BrowserRouter,Routes, Link, Route, Router } from 'react-router-dom';
import Cities from './Cities';
import CityDetails from './CityDetails';
import CityNews from './CityNews';
import RefHooKExample from './RefHookExample';
import ClassBasedCounterForm from './ClassBasedCounterForm';
import ClassBasedCounter from './ClassBasedCounter';
import React, { useState } from 'react';
import ReduxCounter from './ReduxCounter';
import ReduxTodo from './ReduxTodo';
import EditTodo from './EditTodo';
import UseMemoHookExample from './UseMemoHookExample';
import CustomhookUser from './CustomHookUser';
import Profile from './Profile';
import Log from './Log';
import UserMenu from './UserMenu';
import JwtDecode from './jwtDecode';
import Table from './Data-Table';
import LazyHome from './LazyHome';
import Display from './DisplayConsumer';
import UseContextDisplay from './Display_useContext';
import HeaderBar from './NestedConsumers';
import UseContextHeaderBar from './NestedUseContext';
import UseMemo from './UseMemo';
import UseEffect from './UseEffect';

export const NumberContext = React.createContext();
export const CurrentUser = React.createContext();
export const Notifications = React.createContext();

function App() {
  const [show,setShow] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const LOGIN_URL = "http://ascendion.com/login";
  function greet(){
    alert("Lets Login! You have a great day!");
  }
  let login_attempts=5;
  let error_msgs={
    LOGIN_FAILED: "sorry!unable to login",
    LOGIN_500:"Server Error"
  };
  let menuData = [
    {title:"Home",path:"/"},
    {title:"Todos",path:"/todo"},
    {title:"Login",path:"/login/Lets-login/123"},
    {title:"Cities",path:"/Cities"},
    {title:"RefHook",path:"/ref"},
    {title:"ClassBasedCounter",path:"/ClassBasedCounter"},
    {title:"ReduxCounter",path:"/reduxcounter"},
    {title:"ReduxTodo",path:"/reduxtodo"},
    {title:"jwtdecode",path:"/jwtdecode"},
    {title:"datatable",path:"/datatable"},
    {title:"lazyload",path:"/lazyload"}
  ];
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
    // <NumberContext.Provider value={42}>
    // <CurrentUser.Provider value={{name:"Hruthesh"}}>
    // <Notifications.Provider value={[1,2,3,4,5]}>

    <div className="App">
      {/* <Display />
      <UseContextDisplay />
      <HeaderBar />
      <UseContextHeaderBar />
      <UseMemo listOfItems={listOfItems} props={props}/>
      <UseEffect listOfItems={listOfItems} props={props}/> */}
      {/* <ReduxCounter /> */}
      {/* <ReduxTodo /> */}
      {/* {isLoggedIn && <UserMenu />}
      <Log 
        isLoggedIn={isLoggedIn} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      /> */}
      {/* show var={show}<br />
      <select onChange={(e)=>{e.target.value=="show"?setShow(true):setShow(false);}}>
        <option value="show">Show</option>
        <option value="hide">Hide</option>
      </select> */}

      {/* <LoginForm /> */}
      {/* <h1>Main Page</h1> */}
      <BrowserRouter>
        <Menu menuData={menuData}/>
        <Link to="/Home"> Home </Link> 
        <Link to="/todo">Todo</Link>
        <Link to="/menu">Menu</Link>
        <br/>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route 
                path="/login/:title/:tokenId" 
                element={<Login  
                            L_URL={LOGIN_URL}
                            login_attempts={login_attempts}
                            error_msgs={error_msgs}
                            greet = {greet}/>}/>
          <Route path="/todo/:id" element={<TodoDetails/>}/>
          <Route path="/todo/:id/edit" element={<TodoDetailsEdit/>}/>
          <Route path='/menu' element={<Menu menuData={menuData}/>}/>
          <Route path='/cities/' element={<Cities />}>
          <Route path=':name/' element={<CityDetails />}>
          <Route path='news' element={<CityNews newsText="this is news text"/>}></Route>
          </Route>
          </Route>
          <Route path='/ref' element={<RefHooKExample />}/>
          <Route path='/ClassBasedCounter' element={<ClassBasedCounter />}/>
          {/* <Route path='/reduxcounter' element={<ReduxCounter/>}/>
          {/* <Route path='/usememo' element={<UseMemoHookExample/>}/> */}
          {/* <Route path='/customhook' element={<CustomhookUser/>}/> */}
          {/* <Route path='/profile' element={<Profile/>}/>
          <Route path='/jwtdecode' element={<JwtDecode/>}/>
          <Route path='/datatable' element={<Table/>}/>
          <Route path='/lazyload' element={<LazyHome/>}/> */}
          {/* <Route path="/" element={<ReduxTodo />} />
          <Route path="/edit/:index/:name/:status" element={<EditTodo />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Item/>
      {/* <Genderize/>
      {/* <Github/>
      {/* <GitApp/> */}
      {/* <footer>
         <Footer/>
       </footer>  */}
       {/* <ExampleUseEffect /> */}
    </div>
    // </Notifications.Provider>
    // </CurrentUser.Provider>
    // </NumberContext.Provider>
  );
}
export default App;
