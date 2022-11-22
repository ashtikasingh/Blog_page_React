import React from 'react'
import Card3 from '../../components/Card3'
import '../TheLatest/Thelatest.css'
import '../LatestArticles/Lastestarticle.css'
import Sidebar from '../SideBar/Sidebar'
import Topost from '../TopPost/Topost'

function Food(props) {
  return (
    <>
      <div className='middle'>
      <div className='lastestArticle'>
        <div className='Heading-LS'>{props.name}</div>
        <hr className='line-or mar'/>
            <hr className='line-75'/>
            <Card3/>
            <hr className='line-75'/>
            <Card3/>
            <hr className='line-75'/>
            <Card3/>
            <hr className='line-75'/>
            <Card3/>
            <hr className='line-75'/>
            <Card3/>
            <hr className='line-75'/>
            <Card3/>
        </div>
        <div className='sidebar'>
          <Sidebar/>
          <Topost/>
        </div>
      </div>
    </>
  )
}

export default Food