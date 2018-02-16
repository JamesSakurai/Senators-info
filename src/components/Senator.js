import React, { Component } from 'react'

export default class extends Component {
  
  render() {
    const senator = this.props.person
    
    return (
      <div>
        <h3>{senator.person.firstname} {senator.person.lastname} - {senator.state}</h3>
          <details>
            <summary>More Info</summary>
              <p>{senator.description}</p>
              <p>Phone Number: {senator.phone}</p>
              <p>Birthdate: {senator.person.birthday}</p>
              <p>Term Ends: {senator.enddate}</p>
            <p>Website: <a href={senator.website} target="_blank">{senator.website}</a></p>
          </details>
      </div>
    );
  }
}