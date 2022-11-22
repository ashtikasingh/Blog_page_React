import React from 'react'
import Card1 from '../../components/Card1'
import './Thelatest.css'

function Thelatest() {
  return (
    <>
        <div className='Heading-L'>The Latest</div>
        <hr className='line-or'/>
        <div className='wrapper'>
            <Card1 link="https://en.wikipedia.org/wiki/Temple" img="https://static.toiimg.com/img/70192987/Master.jpg" head1="Joshua Tree" head2="Overnight Adventure" des="Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces" s="Travel/November 13 2022"/>
            <Card1 link="https://www.holidify.com/places/sonamarg/best-time-to-visit.html" img="https://www.holidify.com/images/bgImages/SONAMARG.jpg" head1="Sonamarg, Kashmir" head2="Paradise of India" des="Glaciers, frozen lakes and snow carpets rolled out till the horizon, Sonamarg, literally translating to 'The Meadow of Gold', is a snow paradise in winters." s="Travel/ November 14 2022"/>
            <Card1 link="https://www.glofox.com/blog/fitness-blogs/" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yoga-vs-pilates-1545221124.jpg" head1="Pilates Exercise" head2="Best Home Exercise" des="A proper fitness regime combined with healthy eating helps to maintain a healthy weight and support a strong immune system, both of which are beneficial in fighting infection." s="Fitness/ November 20 2022"/>
      </div>
    </>
  )
}

export default Thelatest