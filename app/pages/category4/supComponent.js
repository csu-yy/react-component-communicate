import React, { Component } from 'react'

import Sub1 from './sub1Component'
import Sub2 from './sub2Component'

export default class SupComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Sub1 />
        <Sub2 />
      </div>
    )
  }
}
