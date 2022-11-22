import React from 'react'
import './Card1.css';
function Card2(props) {
  return (
    <>
      <div className='card-1'>
      <div className='card-body'>
        <h3 className='card-title'>{props.ctitle}</h3>
        <p className='card-des'>{props.cdes}</p>
        <p className='small'>{props.smt}</p>
      </div>
      </div>
    </>
  )
}

export default Card2