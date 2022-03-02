import React from 'react'

export default function Grid(props) {
  const style ={
    gap: props.gap ? `${props.gap}px`: '0'
  }
  const col = props.col ? `${props.col}px`: ''
  return (
  <div className={`grid ${col}`}></div>
  );
}
