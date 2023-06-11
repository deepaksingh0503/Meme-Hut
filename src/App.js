import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import NewsContainer from "./containers/NewsContainer/NewsContainer";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      enable:false,
    };
  }
  render() {
    return (
      <>
      <Navbar enable={this.enable}/>
       <NewsContainer enable={this.enable} />
      </>
    );
  }
}
