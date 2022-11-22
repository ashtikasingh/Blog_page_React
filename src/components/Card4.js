import React from "react";
import "./Card4.css";
import I2 from "../images/download.jpg";
import I1 from "../images/person1.png";
function Card4 (){
    return(
        <>
            <div className="c4-cont ">
                <p className="c4-p">Related Reads</p>
                <div className="c4-img"><img src={I2}/></div>
                <h2>Joshua Tree Overnight Adventure</h2>
                <div className="content-head ">
                    <div className="headd-img  c4 "><img src={I1}/></div>
                    <div className="headd-txt  c4-txt ">
                        <p>Dmitry Nozhenko</p>
                        <span>Jan 28 2019 - 10 min read</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card4;