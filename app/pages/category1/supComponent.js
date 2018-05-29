import React, { Component } from 'react'
import SubComponent from './subComponent'

export default class SupComponent extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        <SubComponent title={'父组件->子组件通讯  用props'} />
      </div>
    )
  }
}