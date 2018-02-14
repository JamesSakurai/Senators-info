import React, { Component } from 'react'
import Senator from './Senator.js'
import { getDemocrats, getRepublicans } from '../filters'


export default class extends Component {
  
  renderRepublicans () {
    return getRepublicans().map(senator => <Senator person={senator}/>)
  }
  
  renderDemocrats () {
    return getDemocrats().map(senator => <Senator person={senator}/>)
  }
  
  render() {
    
    const republicans = this.renderRepublicans()
    const democrats = this.renderDemocrats()
    
    return (
      <div>
        <h1 id="reps">Republicans</h1>
        {republicans}
        <h1 id="dems">Democrats</h1>
        {democrats}
      </div>
    );
  }
}