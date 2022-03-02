import React from 'react'
// import Header from ''
import Header from '/header/Header';
import Menu from "/menu/Menu";

export default function MainLayout() {
  return (
    <div className="component"> 
    <Header />
    
    <Menu />
    </div>
  )
}
