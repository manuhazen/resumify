import React, { Component } from 'react';
import {connect} from 'react-redux';

import Sidebar from './tools/SideBar';

export class Panel extends Component {
  render() {
    return (
      <section className="resumify-control-panel">
        <aside>
          <Sidebar />
        </aside>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(Panel);
