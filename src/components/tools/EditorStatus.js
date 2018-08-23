import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {updateEditorStatus} from '../../actions';


// Types of Status
export const UPDATED = 'Resume Updated!';
export const WAITING = 'Waiting for Resume Changes...';
export const ERROR = 'Invalid JSON';
export const VALIDATION = 'Validating...';
let resetTimer;

export class EditorStatus extends Component {

    componentDidMount(prevProps, prevState) {
        if (this.props.statusEditor === UPDATED) {
            clearTimeout(resetTimer);
            resetTimer = setTimeout(
                () => this.props.updateEditorStatus(WAITING),
                5000
            );
        }
    }
    render() {
        return (
            <em style={{
                color: this.props.statusEditor === UPDATED ? 'green' :
                this.props.statusEditor === ERROR ? 'red' : 'black'
             }}> {this.props.statusEditor }</em>
        );
    }
}

const mapStateToProps = (state) => ({
    statusEditor: state.panel.editorStatus,
});

const mapDistpatchToProps = (dispatch) => bindActionCreators({
    updateEditorStatus
}, dispatch);

export default connect(mapStateToProps, mapDistpatchToProps)(EditorStatus)
