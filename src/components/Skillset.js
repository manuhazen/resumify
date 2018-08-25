import React, { Component } from 'react'
import {connect} from 'react-redux';

export class Skillset extends Component {
  render() {

    const skills = this.props.skillset.map( (skill, index) => {
      return (
        <div key={index} className={`grid-column-${index+1}` + ' skillset-item'}>
          <h3 className="is-size-5">{ skill.category }</h3>
          <div className="tags tags-container">
            {
              skill.keywords.map( (tag, index) =>{
                return index === skill.keywords.length -1 ? <span className="tag is-light"> {tag} </span> : <span className="tag is-light">{tag}</span>
              })
            }
          </div>

        </div>
      )
    });

    return (
      <section className="resumify-skillset">
        <h2 style={{ fontFamily: this.props.headerFont }} className="is-size-3 has-text-grey-darker	has-text-weight-semibold	"> Professional Skillset</h2>
        <hr/>
        { skills }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  skillset: state.resume.skillset,
  headerFont: state.panel.headerFont,
});



export default connect(mapStateToProps, {})(Skillset);
