import React from 'react'
import Card3 from '../../components/Card3'
import '../TheLatest/Thelatest.css'
import '../LatestArticles/Lastestarticle.css'
import Sidebar from '../SideBar/Sidebar'
import Topost from '../TopPost/Topost'

function Bollywood() {
  return (
    <>
      <div className='middle'>
      <div className='lastestArticle'>
        <div className='Heading-LS'>Bollywood</div>
        <hr className='line-or mar'/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://i.ytimg.com/vi/cxA2y9Tgl7o/maxresdefault.jpg" title="'Drishyam 3' is coming; Hindi and Malayalam will release on the same day - Exclusive" d="'Drishyam 2' is running like a rocket and nothing succeeds like success. The latest whisper coming in from its producer Kumar Mangat's office is that 'Drishyam 3' is going to be made." a="Bollywood/ September 13 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://gumlet.assettype.com/Prabhatkhabar/2022-05/5d39ee0f-ca3c-402a-8747-7765d3b6d424/jhanvi_kapoor.jpg" title="Janhvi Kapoor reveals her two most favourite places in the world!" d="Janhvi Kapoor is on cloud 9 lately for the wonderful feedback she's been getting for her performances back-to-back with 'Good Luck Jerry' and 'Mili'." a="Bollywood/ September 11 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://static.toiimg.com/thumb/msid-95666104,imgsize-52140,width-800,height-600,resizemode-75/95666104.jpg" title="Sonu Sood becomes a saviour yet again as he helps a 'graduate chaiwali' from Patna" d="Sonu Sood became a real life hero for many with his philanthropy and efforts during the pandemic. The actor continues with his charity work." a="Bollywood/ November 13 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://static.toiimg.com/thumb/msid-95667652,width-800,height-600,resizemode-75,imgsize-33276,pt-32,y_pad-40/95667652.jpg" title="Anushka Sharma and Virat Kohli twin in black pyjamas as they return to Mumbai" d="Virat and Anushka kept it comfy and casual in pyjamas. While Virat looked uber cool in a white T-Shirt, Anushka looked cute in an oversized blue hoodie." a="Bollywood/ November 01 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://www.koimoi.com/wp-content/new-galleries/2022/10/when-big-b-crossed-a-ditch-to-see-his-crush-01.jpg" title="Amitabh Bachchan turns emotional as a young fan breaks security to meet him, touches his feet" d="Post the pandemic, Amitabh Bachchan is back to interacting with his fans as part of his Sunday meet and greet. And yesterday he shared an interesting anecdote from his latest weekly meet." a="Bollywood/ November 19 2022"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://static.toiimg.com/photo/msid-95657456/95657456.jpg" title="Exclusive! RAW agent Ravindra Kaushik's biopic back on track, enters the scripting stage" d="Eight months after it was reported that the biopic on celebrated RAW agent Ravindra Kaushik, starring Salman Khan and helmed by Raj Kumar Gupta, had been shelved" a="Bollywood/ November 10 2022"/>
        </div>
        <div className='sidebar'>
          <Sidebar/>
          <Topost/>
        </div>
      </div>
    </>
  )
}

export default Bollywood