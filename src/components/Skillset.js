import React, { Component } from 'react'
import {connect} from 'react-redux';

export class Skillset extends Component {
  render() {

    const skills = this.props.skillset.map( (skill, index) => {
      return (
        <div key={index} className={`grid-column-${index+1}`}>
          <h3>{ skill.category }</h3>
          {
            skill.keywords.map( (tag, index) =>{
              return index === skill.keywords.length -1 ? tag : tag + ', '
            })
          }
        </div>
      )
    });

    return (
      <section className="resumify-skillset">
        <h2> Professional Skillset</h2>
        <hr/>
        { skills }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  skillset: state.resume.skillset
});



export default connect(mapStateToProps, {})(Skillset);
