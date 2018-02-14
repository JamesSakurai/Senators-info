import React, { Component } from 'react'

export default class extends Component {
  
  render() {
    const senator = this.props.person
    
    return (
      <div>
        <h3>Name: {senator.person.firstname} {senator.person.lastname}</h3>
        <h5>{senator.description}</h5>
        <h5>Phone Number: {senator.phone}</h5>
        <h5>Start Date: {senator.startdate}</h5>
        <h5>End Date: {senator.enddate}</h5>
        <h5>Website: {senator.website}</h5>
      </div>
    );
  }
}