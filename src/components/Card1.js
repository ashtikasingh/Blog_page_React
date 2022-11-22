import React from 'react'
import { Link } from 'react-router-dom';
import './Card1.css';
function Card1(props) {
  return (
    <>
      <div className='card-1'>
      <div className='card-body'>
        <Link to={props.link}><img className='card1-img' src={props.img}/></Link>
        <h2>{props.head1}<br/> {props.head2}</h2>
        <p>{props.des}</p>
        <p>{props.s}</p>
      </div>
      </div>
    </>

  )
}

export default Card1;