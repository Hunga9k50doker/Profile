import React from 'react'

export default function Menu({active,setActive}) {
  return <div className={`menu ${active ? 'active' :''}`}>
    <ul className ='menu__list'>
<li className="menu__item">
  Home
</li>
    </ul>
  </div>;
}
