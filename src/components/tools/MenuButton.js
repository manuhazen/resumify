import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    toggleTools,
    openResumifyEditor
} from '../../actions';

export class MenuButton extends Component {

    onButtonClick = (e) => {
        this.props.toggleTools();
        if (this.props.showEditor) {
            this.props.openResumifyEditor();
        }
    }

  render() {
    return (
        <div className={this.props.showEditor ? 'menu-open resume-tools-menu-button': 'resume-tools-menu-button'}
        onClick={this.onButtonClick}>
          <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
          <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
          <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    showTools: state.panel.showTools,
    showEditor: state.panel.showEditor,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleTools,
    openResumifyEditor
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
