import React from 'react'
import Card2 from '../../components/Card2'
import '../TheLatest/Thelatest.css'
function Thelateststories() {
  return (
    <>
        <div className='latestStories'>
          <div className='Heading-L'>The Latest Stories</div>
          <hr className='line-or'/>
        
          <div className='wrapper'>
            <Card2/>
            <Card2/>
            <Card2/>
          </div>
        </div>
    </>
  )
}

export default Thelateststories