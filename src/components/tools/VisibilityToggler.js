import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {toggleShowItem} from '../../actions';

export class VisibilityToggler extends Component {

  onCheckBoxChange = (e) => {
    let item = e.target.getAttribute('data-toggle');
    this.props.toggleShowItem(item);
  };


  render() {
    return (
      <div className="resumify-visibilityToggler">
        <h2> Toggler Visibility </h2>

        <div className="check-box-container" >
          <label htmlFor="address-visibility">
            <input id="address-visibility"
              type="checkbox"
              defaultChecked={this.props.showAddress}
              onChange={this.onCheckBoxChange}
              data-toggle="showAddress"/> Show Address
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="email-visibility">
            <input id="email-visibility"
              type="checkbox"
              defaultChecked={this.props.showEmail}
              onChange={this.onCheckBoxChange}
              data-toggle="showEmail"/> Show Email
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="phone-visibility">
            <input id="phone-visibility"
              type="checkbox"
              defaultChecked={this.props.showPhone}
              onChange={this.onCheckBoxChange}
              data-toggle="showPhone"/> Show Phone
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="github-visibility">
            <input id="github-visibility"
              type="checkbox"
              defaultChecked={this.props.showGithub}
              onChange={this.onCheckBoxChange}
              data-toggle="showGithub"/> Show Github
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="linkedin-visibility">
            <input id="linkedin-visibility"
              type="checkbox"
              defaultChecked={this.props.showLinkedIn}
              onChange={this.onCheckBoxChange}
              data-toggle="showLinkedIn"/> Show LinkedIn
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="education-visibility">
          <input id="education-visibility"
            type="checkbox"
            defaultChecked={this.props.showEducation}
            onChange={this.onCheckBoxChange}
            data-toggle="showEducation"/> Show Education
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="techskills-visibility">
          <input id="techskills-visibility"
            type="checkbox"
            defaultChecked={this.props.showSkillset}
            onChange={this.onCheckBoxChange}
            data-toggle="showSkillset"/> Show Technical Skills
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="projects-visibility">
          <input id="projects-visibility"
            type="checkbox"
            defaultChecked={this.props.showProjects}
            onChange={this.onCheckBoxChange}
            data-toggle="showProjects"/> Show Projects
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="experience-visibility">
          <input id="experience-visibility"
            type="checkbox"
            defaultChecked={this.props.showExperience}
            onChange={this.onCheckBoxChange}
            data-toggle="showExperience"/> Show Experience
          </label>
        </div>

        <div className="check-box-container" >
          <label htmlFor="website-visibility">
          <input id="website-visibility"
            type="checkbox"
            defaultChecked={this.props.showWebsite}
            onChange={this.onCheckBoxChange}
            data-toggle="showWebsite"/> Show Website
          </label>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    showAddress: state.panel.showAddress,
    showEmail: state.panel.showEmail,
    showPhone: state.panel.showPhone,
    showGithub: state.panel.showGithub,
    showSkillset: state.panel.showSkillset,
    showProjects: state.panel.showProjects,
    showEducation: state.panel.showEducation,
    showExperience: state.panel.showExperience,
    showLinkedIn: state.panel.showLinkedIn,
    showWebsite: state.panel.showWebsite
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleShowItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityToggler)
