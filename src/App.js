import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Panel from './components/Panel';

import Notifications from 'react-notify-toast';

class App extends Component {
  render() {
    return (
      <div className="app resumify">
        <Notifications />
        <div style={{ display: 'inline-block', width:'19%', height: '100vh', border:'1px solid black' }}>
          <Panel />
        </div>
        <div style={{ display: 'inline-block', width:'80%' }}>
          <Header />
          <Education />
          <Skillset />
          <Projects />
          <Experience />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  font: state.panel.font,
  showSkillset: state.panel.showSkillset,
  showProjects: state.panel.showProjects,
  showEducation: state.panel.showEducation,
  showExperience: state.panel.showExperience,
  showpanel: state.panel.showpanel
})

export default connect(mapStateToProps, {})(App);
