import React from 'react'

export default function BoxItem(props) {
  return (
   <div className="box">
     <div className="box__header">
        <img src="" alt="" />
     </div>
     <div className="box__body">
       <button className="btn btn__primary">Read more</button>
       <button className="btn">
         <a href="/" target="_blank" >Visit website</a>
       </button>
     </div>
   </div>
  );
}
