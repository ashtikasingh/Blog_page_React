import React from 'react'
import './Single.css'

function Single() {
  return (
    <>
        <div className="tech-cont ">
            <div className="share  ">
                <div className="share-1"> 
                    <img src={I5}/> <span> 9.3K</span> <br/> <br/>
                    <img src={I6}/><span>Share this article</span>
                </div>
            </div>
            <div className="tec-content ">
                <h2>5 Ways to animate a React app</h2>
                <div className="content-head">
                    <div className="headd-img "><img src={I1}/></div>
                    <div className="headd-txt ">
                        <p>Dmitry Nozhenko</p>
                        <span>Jan 28 2019 - 10 min read</span>
                    </div>
                    <div className="headd-fav "><img src={I2}/></div>
                </div>
                <div className="tec-img1"><img src={I3}/></div>

                <div className="tec-txt2"> 
                Animation in ReactJS app is a popular topic and there are many ways to create
different types of animations. Many developers create animation exclusively using
CSS and adding classes to HTML Tags. This is a great way and you should use it.
If you want to create complex animations you can pay attention to GreenSock.
GreenSock is the most powerful animation platform. There are also a lot of libraries,
components for creating animation in React.
<br/><br/><br/>
<b> Lets talk about them.</b>   
                </div>
                <div className="tec-img2"><img src={I4}/></div>

                <button>React</button>
                <button>Javascript</button>
                <button>Animation</button>

                <hr/>
                <div className="content-head">
                    <div className="headd-img "><img src={I1}/></div>
                    <div className="headd-txt ">
                        <p>Dmitry Nozhenko</p>
                        <span>Jan 28 2019 - 10 min read</span>
                    </div>
                </div>
                <hr/>
            </div>
        </div>

        <div className="tec-foot">
            <p className="foot-head">More from Siren</p>   
            <hr/>
            {/* <div className="foot-imgtxt">
                <Card5/>
                <Card5/>
                <Card5/>
            </div>  */}
        </div>

        </>
  )
}

export default Single