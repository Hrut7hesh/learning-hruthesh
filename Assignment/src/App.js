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
import Genderize from './Genderize'
import { BrowserRouter,Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Main Page</h1>
      {/* <BrowserRouter>
        <Link to="/todo">Todo</Link>
        <Link to="/login/Lets-login/123">Login</Link>
        <br/>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/login/:title/:tokenId" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      <Item/>
      <Genderize/>
    </div>
  );
}

export default App;
