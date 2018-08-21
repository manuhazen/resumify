import React, { Component } from 'react';

import PrintButton from './PrintButton';
import EditorOpener from './EditorOpener';
import FontSelector from './FontSelector';
import VisibilityToggler from './VisibilityToggler';

export class SideBar extends Component {
  render() {
    return (
      <div className="resumify-tools-sidebar">
        <h1>Toolbar manito</h1>
        <em>This is a fucking toolbar, ve klk</em>
        <hr/>
        <br/>
        <h1>Tools papa</h1>
        <PrintButton />
        <EditorOpener />
        <FontSelector />
        <VisibilityToggler />
      </div>
    )
  }
}

export default SideBar;
