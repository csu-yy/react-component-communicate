import React, { Component } from 'react'
import emitter from './ev'

export default class Sub1Component extends Component{
  constructor(props){
    super(props)
    this.state={
      msg: ''
    }
  }

  componentDidMount(){
    // 声明一个自定义事件
    // 在组件加载完成以后
    this.eventEmitter = emitter.addListener('callMe',(msg)=>{
      this.setState({
        msg
      })
    })
  }

  // 组件销毁前移除事件监听
  componentWillUnmount(){
    emitter.removeListener(this.eventEmitter)
  }

  render(){
    return(
      <div>
        {this.state.msg}
        我是非嵌套1号
      </div>
    )
  }
}