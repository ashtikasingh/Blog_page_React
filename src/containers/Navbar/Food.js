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
        <div className='Heading-LS'>Food</div>
        <hr className='line-or mar'/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://cdn.downtoearth.org.in/library/large/2019-03-05/0.89399200_1551782137_fast1.jpg" title="The REAL reason why most fast-food chains have red & yellow logos" d="Let's accept it, fast food is a part of our life. From burgers to fries, and crispy chicken to pizza, we love consuming." a="Food"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.livemint.com/img/2022/11/22/600x338/1167533_698238733525229_1951249235_o_1669122462716_1669122527700_1669122527700.jpg" title="Food bill from 1985 stuns internet users: 'Who bhi kya din the'" d="A 37-year-old food bill from a restaurant, which has gone viral on social media, has stunned the internet, leaving people wondering, 'who bhi kya din the!'" a="Food"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://images.livemint.com/img/2022/11/21/600x338/FMCG_1669044227710_1669044227947_1669044227947.jpg" title="The trouble with star ratings of package food" d="If India's top food safety regulator has its way, you may soon be watching out for 'star ratings' on the packets of chips or chocolate when you step into the market." a="Food"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://static.toiimg.com/photo/95654421.cms" title="The tradition of applying ghee on roti: Is it healthy?" d="Think of the early days, when no meals were complete without a dollop of ghee in the thali. From slathering it on rotis to adding it to dal, the aroma of ghee was genuinely soul-satisfying." a="Food"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://c.ndtvimg.com/2021-04/c0fgijl_mcdonalds-generic-mcdonalds_625x300_30_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350" title="McDonald's France Starts Reusable Packaging To Reduce Waste, Twitter Reacts" d="McDonald's in France has come up with a new reusable packaging, and the photograph of the same has gone viral on Twitter. Check it out!" a="Food"/>
            <hr className='line-75'/>
            <Card3 li="" img1="https://c.ndtvimg.com/2022-11/3l02nngo_mashed-potatoes_625x300_22_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350" title="Easy Viral Hack Gives Mashed Potatoes Without Peeling Them" d="Mashed potatoes can be made easily without the hassle of peeling them first. Wondering how? Watch this viral hack to know!" a="Food"/>
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