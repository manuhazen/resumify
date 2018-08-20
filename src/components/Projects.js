import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Projects extends Component {


  render() {
    
    const projectsList = this.props.projects.map( (project, index) => {
      return (
        <li key={index}>
          <h3>
            { project.link ? <a href={project.link} target='_blank' > {project.name} </a>  : project.name }
          </h3>
          <h3>
            {`${project.dateFrom} - ${project.dateTo}`}
          </h3>
          <em>
            {project.teamBrief}
          </em>
          <ul>
            {
              project.details.map( (detail, detailId) => {
                return (
                  <li key={detailId}>
                    {detail.search('http') > - 1 ? <a href={detail} target="_blank">{detail}</a> : detail }
                  </li>
                )
              })
            }
          </ul>
        </li>
      )
    });
  
    return (
      <section className="resumify-projects">
        <h2>Projects</h2>
        <hr/>
        <ul>
          { projectsList }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.resume.projects,
})


export default connect(mapStateToProps, {})(Projects);
