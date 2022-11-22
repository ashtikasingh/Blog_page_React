import React from 'react'
import Card3 from '../../components/Card3'
import '../TheLatest/Thelatest.css'
import '../LatestArticles/Lastestarticle.css'
import Sidebar from '../SideBar/Sidebar'
import Topost from '../TopPost/Topost'

function Fitness() {
  return (
    <>
     <div className='middle'>
      <div className='lastestArticle'>
        <div className='Heading-LS'>Fitness</div>
        <hr className='line-or mar'/>
            <hr className='line-75'/>
            <Card3  li="" img1="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/strength-training-1655306931.jpg" title="Strength gain is associated with training volume in low responders" d="High-intensity isometric training is considered to be important in achieving greater strength gain." a="Fitness/ November 13 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHw%3D&w=1000&q=80" title="Less gym time, same results: Why 'lowering' weights is all you need to do" d="New research has shown one type of muscle contraction is most effective at increasing muscle strength and size." a="Fitness/ November 13 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdn3YH3wxZH60_E4dzL8ffWhZs_-LGB9u6gw&usqp=CAU" title="Outdoor Exercise in the Fall and Winter" d="Exercising outdoors as the weather gets colder and the days shorter may seem difficult. These tips can help you have a successful exercise routine." a="Fitness/ November 14 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://www.verywellfit.com/thmb/sCWgbKIFqHZR-bwX8CKi9pYJie4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1204463881-dc3c94a1d51444daa69b4ccdeb34a7e9.jpg" title="35 Black-Owned Fitness Companies to Support Now and Always" d="The first step to a more equal future is cultivating awareness—getting people to understand that the wellness and fitness industries are not very inclusive and that this problem has existed for quite some time." a="Fitness/ November 10 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://www.verywellfit.com/thmb/BDqyfZTDqM9a11Dhcc3I7jACwfM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RestaurantfoodOscarWong-bc473136a8de4da1be44934547584e3f.jpg" title="How Eating Out Impacts Your Health" d="Eating out is an enjoyable way to connect socially, try new foods, and take a break from cooking." a="Fitness/ November 17 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://www.verywellfit.com/thmb/ItlETD9YjPVEG-MJa_OCzzwRDzk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1331153435-ab77c4e848e74a35bcc11a7b198af022.jpg" title="How Activating the Central Nervous System Before a Workout Improves Performance" d="A proper warm-up before you begin a weight lifting session can set the stage for enhanced performance" a="Fitness/ November 20 2022"/>
        </div>
        <div className='sidebar'>
          <Sidebar/>
          <Topost/>
        </div>
      </div>
    </>
  )
}

export default Fitness