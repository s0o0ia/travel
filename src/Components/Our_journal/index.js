import React, { Component } from "react";
import wave from "../../media/img/waves.png"
import mountains from "../../media/img/Layer50.png"
import lake from "../../media/img/Layer49.png"
import forest from "../../media/img/9127271170_42c133847e_z.png"
import leaf from "../../media/img/leaf.png"
import heart from "../../media/img/heart.png"
import kaplia from "../../media/img/kaplia.png"


export default class Our_journal extends Component {
    render(){
        return(
      
            <section className="Our_journal">
                <div className="main">
                    <img  src={wave}/>
                    <h2>our journal</h2>
                    <div className="squares">
                        <div>
                            <div className="block">
                                <div className="squares_img">
                                    <img src={mountains}></img>
                                    <img className="icon" src={heart}></img>
                                </div>
                                <div className="squares_text">
                                    <h4>LOVE</h4>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</h3>
                                    <p>You know how to make best coffee in the universe? Or, maybe you’re very good in designing gloves? Tell everyone about your experience and skills.</p>
                                    <p>01</p>
                                </div>
                            </div>
                            <div className="block">
                                <div  className="squares_text">
                                    <h4>TREE</h4>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                                    <p>The way to a successful brand is hard, but always very interesting. Share the full story of your project – from the very first day until now</p>
                                    <p>02</p>
                                </div>
                                <div className="squares_img">
                                    <img src={forest}></img>
                                    <img className="icon" src={leaf}></img>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="block three">
                            <div className="squares_img">
                                <img src={lake}></img>
                                <img className="icon" src={kaplia}></img>
                             </div>
                            
                            <div  className="squares_text">
                                <h4>WATER</h4>
                                <h3>LITTLE PIECES OF OUR PROUDNESS</h3>
                                <p>What do you do better than your competitors? What are you proud of? What details and advantages of your product you want people to know about?</p>
                                <p>03</p>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
          
        )
    }
}