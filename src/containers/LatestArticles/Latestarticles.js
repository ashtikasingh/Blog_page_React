import React from 'react'
import Card3 from '../../components/Card3'
import './Lastestarticle.css'
import '../TheLatest/Thelatest.css'
function Latestarticles() {
  return (
    <>
        <div className='lastestArticle'>
        <div className='Heading-LS'>Latest Articles </div>
        <hr className='line-or mar'/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.pexels.com/photos/763097/pexels-photo-763097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Catch waves with an adventure guide" d="Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-" a="Travel"/>
            <hr className='line-75'/>
            <Card3 li="https://www.eater.com/2012/5/9/6588321/the-worlds-largest-pizza-ever-weighed-26883-lbs" img1="https://cdn.vox-cdn.com/thumbor/wlVJZtuuxXjzkpH2n6zfT5iaF1k=/41x0:688x485/1220x813/filters:focal(41x0:688x485):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/39116344/worlds-largest-pizza.0.jpg" title="World Largest Pizza!!!" d="The largest circular pizza ever baked weighed was made in Norwood, South Africa by Norwood Hypermarket on December 8, 1990." a="Food"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://www.doi.gov/sites/doi.gov/files/uploads/grandcanyonnpjackdengersmall.jpg" title="13 Things You Didn't Know About Grand Canyon National Park" d="First protected in 1893 as a reserve and later as a national monument, it wasn't until February 26, 1919, that the Grand Canyon became a national park." a="Travel"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://www.rd.com/wp-content/uploads/2017/07/01-The-Biggest-Burger-in-the-World-Is-1774-Pounds-and-Ready-for-You-to-Order-at-This-Restaurant-Mallies-Sports-Grill-and-Bar.jpg?resize=1024,683" title="The Biggest Burger in the World Is 1,774 Pounds" d="The burger started off as 2,000 pounds of ground beef, and then was cooked down to a lean 1,774, before having 300 pounds of onions, pickles, lettuce, and c" a="Food"/>
            
            <div className="img-last">
              <div className='down'>
              <div className='Title-text'>Title of vertical gallery</div>
              <div className='small gray'>
              Travel/ August 21 2017
            </div>
            </div>
            </div>
        </div>

    </>
  )
}

export default Latestarticles