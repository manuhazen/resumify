import React, { Component } from 'react';

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

export default Panel
