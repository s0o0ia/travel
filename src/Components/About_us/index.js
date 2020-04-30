import React, { Component } from "react";
import about_first_img from "../../media/img/16047839768_3d53d0b471_z.jpg"
import about_second_img from "../../media/img/App.test.js.png"
import wave from "../../media/img/waves.png"
import map from "../../media/img/VectorSmartObject.png"


export default class About_us extends Component {
    render(){
        return(
      
            <section className="About_us">
              <img className="map" src={map} alt=""/>
              <div className="main">
                <div className="first">
                <img className="wave" src={wave} alt=""/>
                  <h3>ABOUT US</h3>
                  <p>Aliquam sed posuere urna, et gravida nisl. Praesent interdum nisl libero, pretium egestas purus eleifend vitae. Mauris suscipit vel lectus at luctus.</p>
                  <button>read more</button>
                </div>
                <div className="second">
                  <img className="one" src={about_first_img} alt=""/>
                  <img className="two" src={about_second_img} alt=""/>
                </div>
              </div>

          </section>
        
        )
    }
}