import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  openResumifyEditor,
  toggleTools
} from '../../actions';


export class EditorCloseButton extends Component {

  onCloseButtonClick = (e) => {
    this.props.openResumifyEditor();
    this.props.toggleTools();
  };


  render() {
    return (
      <div className={this.props.showEditor ? 'resume-tools-menu-button close hidden-print' : 'menu-open resume-tools-menu-button hidden-print close' }
        onClick={this.onCloseButtonClick}>
          <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
          <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
          <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showEditor: state.panel.showEditor,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  openResumifyEditor,
  toggleTools,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorCloseButton);
