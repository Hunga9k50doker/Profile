import React from 'react'

export default function Button(props) {
  return (
    <button className="btn btn__contact">
       <i className={`${props.icon}`} ></i>
       <span className={`${props.className}`}></span>
    </button>
  )
}
