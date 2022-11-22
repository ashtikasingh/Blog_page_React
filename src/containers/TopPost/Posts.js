import React from 'react'
import './posts.css'

function Posts(props) {
  return (
    <>
        <div className='short-div'>
            <div className='p-img'></div>
            <div className='p-des'>Catch waves with <br/>adventure guide
            <br/>
            <div className='smallU'>Travel</div>
            </div>
            <div className='num'>{props.num}</div>
            
        </div>
    </>
  )
}

export default Posts