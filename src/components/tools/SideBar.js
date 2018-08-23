import React, { Component } from 'react';
import {connect} from 'react-redux';

import PrintButton from './PrintButton';
import EditorOpener from './EditorOpener';
import FontSelector from './FontSelector';
import VisibilityToggler from './VisibilityToggler';
import MenuButton from './MenuButton';
import OrderChanger from './OrderChanger';

export class SideBar extends Component {
  render() {
    return (
      <div className="resumify-tools-sidebar hidden-print"  ref={sidebar => this.sidebar = sidebar}>
        {/* <MenuButton /> */}
        <h1 className="is-size-4	">Toolbar</h1>
        <em className="is-size-6	">Control Panel of the Builder</em>
        <hr/>
        <br/>
        <h1>Tools papa</h1>
        <PrintButton />
        <EditorOpener />
        <FontSelector />
        <VisibilityToggler />
        <OrderChanger />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showTools: state.panel.showTools,
})

export default connect(mapStateToProps, {})(SideBar);
