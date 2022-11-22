import React from 'react'
import './Home.css'
import Gallery from '../../components/Gallery'
import Latestarticles from '../LatestArticles/Latestarticles';
import Sidebar from '../SideBar/Sidebar';
import Thelatest from '../TheLatest/Thelatest';
import Thelateststories from '../TheLatestStories/Thelateststories';
import '../SideBar/Sidebar.css';
import Topost from '../TopPost/Topost';

function Home() {
  return (
    <>
      <Gallery/>
      <Thelatest/>
      <div className='middle'>
        <Latestarticles name="Latest Articles"/>
        
        <div className='sidebar'>
        <Sidebar/>
        <Topost/>
        </div>
      </div>
      <Thelateststories/>
      
    </>
  )
}

export default Home