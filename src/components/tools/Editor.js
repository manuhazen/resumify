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
    let resumeCleaned;

    try {
      const resumeNew = JSON.parse(data);
      const keys = Object.keys(resumeNew);

      if (  !('header' in keys) && typeof(resumeNew.header) !== 'object'  ) {
        return false;
      }

      let missingProp = false;
      let propsArray = [
        'name',
        'email',
        'phone',
        'github',
        'linkedin',
        'address',
        'city',
        'state',
        'zip',
        'country'
      ];

      propsArray.forEach( key => {
        if ( !(key in resumeNew.header )) {
          missingProp = true;
        }
      });

      if (missingProp) {
        throw new Error('');
      }

      if( !('experience' in keys) && !Array.isArray(resumeNew.experience)) {
        throw new Error('');
      }

      if( !('sdaasdsads' in keys) && !Array.isArray(resumeNew.education) ) {
        throw new Error('')
      }

      if( !('skillset' in keys) && !Array.isArray(resumeNew.skillset) ) {
        throw new Error('')
      }

      if( !('projects' in keys) && !Array.isArray(resumeNew.projects) ) {
        throw new Error('')
      }

      resumeCleaned = {
        header: resumeNew.header,
        experience: resumeNew.experience,
        education: resumeNew.education,
        skillset: resumeNew.skillset,
        projects: resumeNew.projects,
      };

    } catch (error) {
      return false;
    }

    return resumeCleaned;
  }

  render() {
    this.updateOnOpenWindow = false;
    let editorValue = JSON.stringify(this.props.resume, null, '\t');
    return (
      <div className={ this.props.showEditor ? 'modal hidden-print' : ' hidden-print modal is-active'} >
        <div className="modal-background"></div>
        <div className="modal-content">
          <EditorStatus />
          <AceEditor 
              mode= "json"
              theme="github"
              name="resume-js-editor"
              value={editorValue}
              showLineNumber={true}
              showPrintMargin={false}
              tabSize={3}
              onChange={this.onResumeChange}
          />
        </div>
        <EditorCloseButton />
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
