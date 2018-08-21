import React, { Component } from 'react';
import {connect} from 'react-redux';

import AceEditor from 'react-ace';
import {
    updateResume,
    updateEditorStatus
} from '../../actions';
import 'brace/mode/json';
import 'brace/mode/tomorrow';
import 'brace/ext/language_tools';

import EditorCloseButton from './EditorCloseButton';


export class Editor extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({}, dispatch);
export default Editor
