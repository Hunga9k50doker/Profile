import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
export default function App() {
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route
          path='./main'></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
