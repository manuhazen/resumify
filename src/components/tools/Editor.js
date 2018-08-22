import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AceEditor from 'react-ace';
import {
    updateResume,
    updateEditorStatus
} from '../../actions';
import 'brace/mode/json';
import 'brace/theme/github';
import 'brace/ext/language_tools';

import EditorStatus, {
  ERROR,
  UPDATED,
  VALIDATION
} from './EditorStatus';

import EditorCloseButton from './EditorCloseButton';


export class Editor extends Component {

  onResumeChange = (data) => {
    this.props.updateEditorStatus(VALIDATION);
    const updatedResume = this.isValidJSON(data);
    if (updatedResume) {
      this.props.updateResume(updatedResume);
      this.props.updateEditorStatus(UPDATED);
      return;
    }

    this.props.updateEditorStatus(ERROR);
  }

  isValidJSON = (data) => {
    console.log(data);
  }



  render() {
    let editorValue = JSON.stringify(this.props.resume, null, '\t');
    return (
      <div style={{ display: this.props.showEditor ? 'None' : 'Block'}} >
      
        <AceEditor 
          mode="json"
          theme="github"
          name="resume-editor"
          value={editorValue}
          showLineNumber={true}
          showPrintMargin={false}
          tabSize={3}
          onChange={this.onResumeChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showEditor: state.panel.showEditor,
  resume: state.resume,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateResume,
  updateEditorStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
