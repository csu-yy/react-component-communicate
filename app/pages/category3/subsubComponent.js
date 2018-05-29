import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class SubSubComponet extends Component{
  constructor(props,context){
    super(props,context)
  }

  // 子组件声明自己需要使用 context
  static contextTypes= {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    callback: PropTypes.func,
  }

  render(){
    const style = { 
      color:this.context.color,
      fontSize: this.context.fontSize
    }
    const cb = (msg) => {
      return () => {
        this.context.callback(msg);
      }
    }
    return(
      <div style = { style }>
        SUBSUB
        <button onClick = { cb("我胡汉三又回来了！") }>点击我</button>
      </div>
    )
  }
}