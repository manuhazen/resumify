import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Education extends Component {
  render() {

    const educations = this.props.education.map( (edu, index) => {
      return (
        <li className="education-item" key={index}>
          <div className="education-item__head is-flex"> 
            <h3 className="is-size-5 has-text-black-ter	has-text-weight-bold is-capitalized"> {edu.site} </h3>
            { edu.dateFrom ? <h4 className="has-text-grey-lighter has-text-weight-light	is-italic">{`${edu.dateFrom}-${edu.dateTo}`}</h4> : <h4></h4>}  
          </div>
          <em className="education-item__deegree has-text-grey-dark">{ edu.deegree }</em> 
        </li>
      )
    });


    return (
      <div className="resumify-education">
        <h2 className="is-size-3 has-text-grey-darker	has-text-weight-semibold	">Education</h2>
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
