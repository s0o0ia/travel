import React, { Component } from "react";
import man from "../../media/img/man.png"


export default class Travel_With_Us_TTM extends Component {
    render(){
        return(
            <section className="Travel_With_Us_TTM">
              <img className="man" src={man}></img>
              <div>
                <div className="main">
                  <div className="first">
                    <img src="" alt=""/>
                    <h4>FIND ME ON BEHANCE:</h4>
                    <p>www.behance.net/slavikpavliv</p>
                  </div>
                  <div className="second">
                    <h1>TRAVEL WITH US </h1>
                    <h1 className="ttm">to the Mountains</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                    <button>ORDER NOW</button>
                  </div>
                </div>
              </div>
          </section>
        )
    }
}