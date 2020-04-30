import React, { Component } from "react";
import srani_yalunku from "../../media/img/srani_yalunku.png"
import wave from "../../media/img/waves.png"

export default class Do_you_wanna_go extends Component {
    render(){
        return(
      
        <section className="Do_you_wanna_go">
          <img className="srani_yalunku" src={srani_yalunku}></img>
            <div className="main">
              <img src={wave}></img>
              <h2>DO YOU WANNA GO?</h2>
              <p>Aliquam sed posuere urna, et gravida nisl. Praesent interdum nisl libero, pretium egestas purus eleifend vitae. Mauris suscipit vel lectus at luctus.</p>
              <div>
                <input className="name" type="text" placeholder="your name"/>
                <input type="text" placeholder="your phone"/>
                <button>ORDER NOW</button>
              </div>
            </div>
          </section>
        
        )
    }
}