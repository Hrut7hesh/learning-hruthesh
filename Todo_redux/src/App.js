import Menu from './Menu';
import { BrowserRouter,Routes, Link, Route, Router } from 'react-router-dom';
import React, { useState } from 'react';
import ReduxCounter from './ReduxCounter';
import ReduxTodo from './ReduxTodo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReduxTodo />} />
          <Route path="/edit/:index" element={<ReduxTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
