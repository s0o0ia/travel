import React, { Component } from "react";
import Header from "./Components/Header/index";
import About_us from "./Components/About_us/index";
import Do_you_wanna_go from "./Components/Do_you_wanna_go/index";
import How_we_work from "./Components/How_we_work/index";
import Our_journal from "./Components/Our_journal/index";
import Travel_With_Us_TTM from "./Components/Travel_With_Us_TTM/index";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Travel_With_Us_TTM />
        <About_us />
        <Our_journal />
        <Do_you_wanna_go />
        <How_we_work />
      </div>
    );
  }
}
