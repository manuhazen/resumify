import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Projects extends Component {


  render() {
    
    const projectsList = this.props.projects.map( (project, index) => {
      return (
        <li key={index} className="project-item">
          <div className="is-flex project-item__header">
            <h3 className="is-size-5	">
              { project.link ? <a href={project.link} target='_blank' > {project.name} </a>  : project.name }
            </h3>
            <h5 className="is-size-7 has-text-grey-light is-italic has-text-weight-light	">
              {`${project.dateFrom} - ${project.dateTo}`}
            </h5>
          </div>
          
          <em className="project-item__brief">
            {project.teamBrief}
          </em>

          <ul className="content">
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
        <h2 className="is-size-3 has-text-grey-darker	has-text-weight-semibold	">Projects</h2>
        <hr/>
        <ul className="projects-list">
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
