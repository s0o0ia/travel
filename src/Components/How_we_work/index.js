import React, { Component } from "react";
import hexagon  from "../../media/img/Polygon1copy 4.png"
import wave from "../../media/img/waves.png"
import circle from "../../media/img/Ellipse22.png"
import img_1 from "../../media/img/1.png"
import img_2 from "../../media/img/7.png"
import img_3 from "../../media/img/77.png"
import map_1 from "../../media/img/mappin.png"
import img_4 from "../../media/img/111.png"
import map_2 from "../../media/img/map2.png"



export default class How_we_work extends Component {
    render(){
        return(
      
            <section className="How_we_work">
            <img src={wave}></img>
            <h2>HOW WE WORK</h2>
            <div className="main">
              <div>
                
                <div className="number">
                  <p>1</p>
                  <div  className="short_line"></div>
                  <div className="long_line"></div>
                </div>
                <div className="bottom_part">
                  
                <div className="long_bottom_line"></div>
                <img src={map_1} className="map_start"></img>
                  <div className="img_block">
                    <img src={hexagon} className="one"></img>
                    <img src={circle} className="two"></img>
                    <img src={img_1} className="three"></img>
                  </div>
                  <p><span>Lorem ipsum dolor sit</span>amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
              <div>
                <div  className="number">
                  <p>2</p>
                  <div  className="short_line"></div>
                </div>
                <div  className="bottom_part">
                <div className="img_block">
                    <img src={hexagon} className="one"></img>
                    <img src={circle} className="two"></img>
                    <img src={img_2} className="three"></img>
                  </div>
                  <p><span>Lorem ipsum dolor sit</span>amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
              <div>
                <div  className="number">
                  <p>3</p>
                  <div  className="short_line"></div>
                </div>
                <div className="bottom_part">
                <div className="img_block">
                    <img src={hexagon} className="one"></img>
                    <img src={circle} className="two"></img>
                    <img src={img_3} className="three"></img>
                  </div>
                  <p><span>Lorem ipsum dolor sit</span>amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
              <div>
                <div  className="number">
                  <p>4</p>
                  <div  className="short_line"></div>
                </div>
                <div  className="bottom_part">
                <img src={map_2} className="map_end"></img>
                <div className="img_block">
                    <img src={hexagon} className="one"></img>
                    <img src={circle} className="two"></img>
                    <img src={img_4} className="three"></img>
                  </div>
                  <p><span>Lorem ipsum dolor sit</span>amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
            </div>
          </section>
        
        )
    }
}