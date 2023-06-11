import React, { Component } from "react";

import loading from "./loading.webp";
import "./loadingbar.css";

export default class LoadingBar extends Component {
  render() {
    return (
      <div className='LoadingBar'>
        <img src={loading} alt='' />
      </div>
    );
  }
}
