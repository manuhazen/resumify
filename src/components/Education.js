import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Education extends Component {
  render() {

    const educations = this.props.education.map( (edu, index) => {
      return (
        <li key={index}>
          <h3> {edu.site} </h3>
          { edu.dateFrom ? <h4>{`${edu.dateFrom}-${edu.dateTo}`}</h4> : <h4></h4>}   
          <em>{ edu.deegree }</em> 
        </li>
      )
    });


    return (
      <div className="resumify-education">
        <h2>Education</h2>
        <hr/>
        <ul>
          { educations }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  education: state.resume.education
});

export default connect(mapStateToProps)(Education)
