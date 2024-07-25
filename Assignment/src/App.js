import './App.css';
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
import { BrowserRouter,Routes, Link, Route } from 'react-router-dom';

function App() {
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
    {title:"Login",path:"/login/Lets-login/123"}
  ];
  return (
    <div className="App">
      <h1>Main Page</h1>
      <BrowserRouter>
        <Menu menuData={menuData}/>
        {/* <Link to="/todo">Todo</Link>
        <Link to="/login/Lets-login/123">Login</Link> */}
        {/* <Link to="/menu">Menu</Link> */}
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
          {/* <Route path='/menu' element={<Menu menuData={menuData}/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <Item/> */}
      {/* <Genderize/> */}
      {/* <Github/> */}
    </div>
  );
}

export default App;
