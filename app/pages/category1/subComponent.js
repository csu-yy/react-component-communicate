import React, { Component } from 'react'

export default class SubComponent extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let { title } = this.props
    return (
      <div>{title}</div>
    )
  }
}