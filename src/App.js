import React, { Component } from 'react';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skillset from './components/Skillset';

import Notifications from 'react-notify-toast';

class App extends Component {
  render() {
    return (
      <div className="app resumify">
        <Notifications />
        <div>
          
          <Header />
          <Experience />
          <Education />
          <Projects />
          <Skillset />
        </div>
      </div>
    );
  }
}

export default App;
