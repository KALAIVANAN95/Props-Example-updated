import React from 'react'

const Flowers = (props) => {
  return (
    <>
     <div className="cards">
      <h2>{props.title}</h2>
      <img src={props.images} alt="flowers"/>
      <p>{props.des}</p>
      <button>{props.btns}</button>
      <hr />
    </div>
 
    </>
  )
}

export default Flowers
