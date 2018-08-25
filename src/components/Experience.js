import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Experience extends Component {
  render() {

    const experiences = this.props.experience.map( (exp, index) => {
        return (
            <li key={index}>
                <h3> {exp.position} </h3>
                <h4>{`${exp.dateFrom} - ${exp.dateTo}`}</h4>

                <em> { exp.company }, {`${exp.city}`}</em>
                <ul>
                    <li> {exp.primaryWorkBrief } </li>
                    { exp.impact1 ? <li>{exp.impact1}</li> : ''}
                    { exp.impact2 ? <li>{exp.impact2}</li> : ''}
                    { exp.impact3 ? <li>{exp.impact3}</li> : ''}
                    { exp.impact4 ? <li>{exp.impact4}</li> : ''}
                </ul>
            </li>
        );
    });
    
    return (
        <section>
            <h2 style={{ fontFamily: this.props.headerFont }} className="is-size-3 has-text-grey-darker has-text-weight-semibold">Experience</h2>
            <hr />
            <ul>
                {experiences}
            </ul>
        </section>
    )
  }
}

const mapStateToProps = (state) => ({
    experience: state.resume.experience,
    headerFont: state.panel.headerFont,
});

export default connect(mapStateToProps, {})(Experience)
