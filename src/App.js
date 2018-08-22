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

    const fullResume = this.props.fullResume.map( (item, index) => {
      switch(item) {
        case EDUCATION:
          return this.props.showEducation ? <Education key={index} /> : '';
        case SKILLSET:
          return this.props.showSkillset ? <Skillset key={index} /> : '';
        case PROJECTS:
          return this.props.showProjects ? <Projects key={index} /> : '';
        case EXPERIENCE:
          return this.props.showExperience ? <Experience key={index} /> : '';
        default: 
          return <h1>Error with the components and Order.</h1>
      }
    });

    return (
      <div className="app resumify">
        <Notifications />
        <div style={{ display: 'inline-block', width:'19%', height: '100vh', border:'1px solid black' }}>
          <Panel />
        </div>
        <div style={{ display: 'inline-block', width:'80%' }}>
          <Header />
          { fullResume }
        </div>
        <Editor />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  font: state.panel.font,
  fullResume: state.panel.fullResume,
  showSkillset: state.panel.showSkillset,
  showProjects: state.panel.showProjects,
  showEducation: state.panel.showEducation,
  showExperience: state.panel.showExperience,
  showpanel: state.panel.showpanel
})

export default connect(mapStateToProps, {})(App);
