import React from 'react'

export default function Menu({active,setActive}) {
  return <div className={`menu ${active ? 'active' :''}`}>Menu</div>;
}
