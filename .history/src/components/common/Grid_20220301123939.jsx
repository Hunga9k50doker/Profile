import React from 'react'

export default function Button(props) {
  return (
    <button className="btn btn__contact">
      <i className={`${props.icon}`}></i>
      <span className='btn__contact__content'>{props.content}</span>
    </button>
  );
}
