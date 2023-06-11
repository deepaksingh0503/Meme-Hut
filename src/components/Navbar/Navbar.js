import React, { Component } from "react";
import "./navbar.css";
import { useState } from "react";
export default class Navbar extends Component {
  render() {
    let { enable } = this.props;

    return (
      <>
        <div className='navbar_container'>
          <div className='logo'>
            <img src='./logo.png' alt='' />
          </div>
          <div className='navbar_logo'>
            <h2>Meme Hut🛖</h2>
          </div>

          <div className='navbar_button'>
            <Toggle isEnable={this.enable} />
          </div>
        </div>
      </>
    );
  }
}

class Toggle extends Component {
  render() {
    let { enable } = this.props;
    return (
      <div className='relative flex flex-col items-center justify-center  overflow-hidden'>
        <div className='flex'>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={enable}
              readOnly
            />
            <div
              onClick={() => {
                this.setState({
                  enable: !this.enable,
                });
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-black-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className='ml-2 text-sm font-medium text-gray-900'>ON</span>
          </label>
        </div>
      </div>
    );
  }
}
