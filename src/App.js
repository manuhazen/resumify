import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Panel from './components/Panel';
import Editor from './components/tools/Editor';

import Notifications from 'react-notify-toast';

import {
  EDUCATION,
  SKILLSET,
  PROJECTS,
  EXPERIENCE
} from './utils/resumeOrder';

class App extends Component {


  render() {


    return (
      <div className="app resumify">
        <Notifications />
        <div className="resumify-toolpanel hidden-print">
          <Panel />
        </div>
        <div className="resumify-preview" style={{ fontFamily: this.props.bodyFont }}>
          <div className="page first-page">
            <Header />
            <Education />
            <Skillset />
          </div>

          <div className="page">
            <Projects />
            <Experience />
          </div>
        </div>
        <Editor className="hidden-print" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bodyFont: state.panel.bodyFont,
  fullResume: state.panel.fullResume,
  showSkillset: state.panel.showSkillset,
  showProjects: state.panel.showProjects,
  showEducation: state.panel.showEducation,
  showExperience: state.panel.showExperience,
  showpanel: state.panel.showpanel
})

export default connect(mapStateToProps, {})(App);
