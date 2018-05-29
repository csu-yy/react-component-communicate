import React, { Component } from 'react'
import SubComponent from './subComponent'

export default class SupComponent extends Component{
  constructor(props){
    super(props)
  }

  clickCallback=(...msg)=>{
    console.log(msg)
  }

  render(){
    let { title } = this.props
    return (
      <div>
        <SubComponent callback={this.clickCallback} />
      </div>
    )
  }
}