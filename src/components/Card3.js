import React from 'react'
import { Link } from 'react-router-dom';
import './Card1.css';
function Card3(props) {
  return (
    <>
        <div className='long-box'>
          <Link to={props.li}> <div><img className="article-img" src={props.img1}/></div></Link>
            <div className='article-desp'>
                <h3 className='card-title'>{props.title}</h3>
                <p className='card-des'>{props.d}</p>
                <p className='smallA'>{props.a}</p>
            </div>
        </div>
    </>
  )
}

export default Card3