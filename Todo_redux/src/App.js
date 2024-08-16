import Menu from './Menu';
import { BrowserRouter,Routes, Link, Route, Router } from 'react-router-dom';
import React, { useState } from 'react';
import ReduxCounter from './ReduxCounter';
import ReduxTodo from './ReduxTodo';
import EditTodo from './EditTodo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ReduxTodo />} />
        <Route path="/edit/:index/:name/:status" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
