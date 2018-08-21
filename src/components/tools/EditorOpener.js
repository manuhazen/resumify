import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {openResumifyEditor} from '../../actions/';

export class EditorOpener extends Component {
    

    render() {
        return (
            <div className="resumify-tools-editor">
                <label>JSON Editor</label>
                <button onClick={this.props.openResumifyEditor}>
                    {!this.props.showResumeEditor ? 'Open Editor': 'Close Editor'}
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showResumeEditor: state.panel.showResumeEditor
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    openResumifyEditor,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorOpener)
