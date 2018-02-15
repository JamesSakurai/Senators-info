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
        <div class="header">
          <h1>Senator Contact List</h1>
        </div>
        <div class="flex-container">
          <section>
            <h2 id="reps">Republicans</h2>
            {republicans}
          </section>
          <section>
            <h2 id="dems">Democrats</h2>
            {democrats}
          </section>
        </div>
      </div>
    );
  }
}