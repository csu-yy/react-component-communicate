import React, { Component } from 'react'
import emitter from './ev'

export default class Sub2Component extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    
  }

  callback=(msg)=>{
    return ()=>{
      // 触发自定义事件
      emitter.emit('callMe','hello')
    }
  }

  render(){

    return(
      <div>
        我是非嵌套2号
        <button onClick={this.callback("blue")}>点击我</button>
      </div>
    )
  }
}