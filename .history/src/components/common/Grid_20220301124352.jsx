import React from 'react'

export default function Grid(props) {
  const style ={
    gap: props.gap ? `${props.gap}px`: '0'
  }
  const col = props.col ? `grid-col-${props.col}`: ''
  const smCol = props.smCol ? `grid-smCol-${props.smCol}` : "";
  const col = props.col ? `grid-col-${props.col}` : "";

  return (
  <div className={`grid ${col}`}></div>
  );
}
