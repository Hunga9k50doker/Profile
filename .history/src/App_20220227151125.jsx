import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import MainLayout from './components/common/layout/MainLayout';
export default function App() {
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route
          path='/' element={<MainLayout/>}>
            <Route path='/' element={<Home />}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
