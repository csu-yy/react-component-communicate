import React, { Component } from 'react'
import PropTypes from "prop-types"
import Sub from "./subComponent";

export default class SupComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      fontSize: '12px'
    }
  }

  // 父组件声明自己支持context
  static childContextTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,  // 利用父组件的state进行改变context对象
    callback: PropTypes.func,
  }

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext() {
    return {
      color: "red",
      fontSize: this.state.fontSize,
      callback: this.callback.bind(this)
    }
  }

  callback(msg) {
    console.log(msg)
    this.setState({
      fontSize: '16px'
    })
  }

  render(){
    return (
      <Sub />
    )
  }
}

