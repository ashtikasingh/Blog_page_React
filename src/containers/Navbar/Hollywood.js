import React from 'react'
import Card3 from '../../components/Card3'
import '../TheLatest/Thelatest.css'
import '../LatestArticles/Lastestarticle.css'
import Sidebar from '../SideBar/Sidebar'
import Topost from '../TopPost/Topost'

function Hollywood() {
  return (
    <>
      <div className='middle'>
      <div className='lastestArticle'>
        <div className='Heading-LS'>Hollywood</div>
        <hr className='line-or mar'/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.hindustantimes.com/img/2022/11/22/550x309/Glass_Onion_Knives_Out_2_1669116878159_1669116886458_1669116886458.jpg" title="Glass Onion first reviews call 'masterful murder mystery' better than Knives Out" d="First reviews for Knives Out sequel Glass Onion say Daniel Craig's 'masterful murder mystery' is better than original" a="Hollywood"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.hindustantimes.com/img/2022/11/22/550x309/Anya_Taylor-Joy_1669114573294_1669114578239_1669114578239.webp" title="Anya Taylor-Joy did all Furiosa driving stunts herself, without driving license" d="Anya Taylor-Joy recently revealed that she is performing all the driving related stunts on Furiosa herself even though she does not have a driving license." a="Hollywood"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.hindustantimes.com/img/2022/11/22/550x309/blake_1669101539540_1669101544545_1669101544545.jpg" title="Ryan Reynolds reveals how he and his kids spoil Blake Lively during pregnancy, 'We take care of the momma'" d="Ryan Reynolds says he and the kids like to rally around Blake Lively to keep her happy during her pregnancy." a="Hollywood"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.hindustantimes.com/img/2022/11/22/550x309/A_still_from_Avatar_The_Way_of_Water_new_trailer_1669090506473_1669090506625_1669090506625.jpg" title="Avatar The Way of Water new mesmerising trailer reminds of Game of Thrones, but is enough to light up your day." d="Avatar The Way of Water: The new trailer of the James Cameron film reminds us of Game of Thrones' dragons but is totally worth it." a="Hollywood"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.hindustantimes.com/img/2022/11/21/400x225/marvel_1669029051425_1669029055496_1669029055496.jpeg" title="New study reveals audience is tired of Marvel now, doesn't want ensemble movies" d="A new study shows Marvel fans are tired of franchises while DC fans show favour for single superhero movies." a="Hollywood"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.hindustantimes.com/img/2022/11/22/400x225/lw_1669096770735_1669096775790_1669096775790.jpg" title="Letitia Wright calls out publication for clubbing her with 'abusers' Brad Pitt, Will Smith: 'Stop this nonsense'" d="Letitia Wright who stars as Shuri in Black Panther: Wakanda Forever snapped back at a publication." a="Hollywood"/>
        </div>
        <div className='sidebar'>
          <Sidebar/>
          <Topost/>
        </div>
      </div>
    </>
  )
}

export default Hollywood