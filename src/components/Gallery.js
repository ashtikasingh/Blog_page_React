import React from 'react'
import './Gallery.css';

function Gallery() {
  return (
    <>
        <div className='gal'>
          <div className='half-ri'>
            <div className='text'>
              <div className='Title-text white'>Title of vertical gallery</div>
              <div className='small gray'>
              Travel/ August 21 2017
            </div>
            </div>
          </div>
          <div className='half-le'>
            <div className='upper-le'>
            <div className='side-text'>
              <div className='Normal-text white'>The Sound cloud <br/> You loved is doomed</div>
              <div className='gray'>
              Travel/ August 21 2017
            </div>
            </div>
            </div>
            <div className='lower-le'>
            <div className='side-text'>
              <div className='Normal-text white'>The Sound cloud <br/> You loved is doomed</div>
              <div className='gray'>
              Travel/ August 21 2017
            </div>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Gallery