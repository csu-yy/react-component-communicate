import React, { Component } from 'react'

export default class SubComponent extends Component{
  constructor(props){
    super(props)
    this.title = '子组件向父组件'
  }

  subCallback = ()=> {
    console.log('gyyy')
    let props = this.props
    props.callback('点击我进行子到父的通讯',this.title)
    /*return ()=>{
      
    }*/
  }

  render(){
    return (
      <button onClick={this.subCallback}>子组件通过回调函数向父组件通讯</button>
    )
  }
}