import React from 'react'
import './topost.css'
import '../TheLatest/Thelatest.css'
import Posts from './Posts'

function Topost() {
  return (
    <>
        <div className='topost'>
            <div className='Heading-LT'>Top Posts</div>
            <hr className='mar1'/>
            <div className='post1'>
                <div className='post-img'></div>
                <div className='f'>
                    <h3 className='post-des'>Catch waves with an <br/> adventure guide</h3>
                    <div className='num1'>1</div>
                </div>
            </div>
            <div className='posts'>
                <hr className='post-line'/>
                <Posts num="2"/>
                <hr className='post-line'/>
                <Posts num="3"/>
                <hr className='post-line'/>
                <Posts num="4"/>
            </div>
        </div>
    </>
  )
}

export default Topost