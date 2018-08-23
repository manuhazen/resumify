import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {openResumifyEditor} from '../../actions/';

export class EditorOpener extends Component {
    

    render() {
        return (
            <div className="resumify-tools-editor">
                <button className="is-fullwidth button is-outlined hidden-print" onClick={this.props.openResumifyEditor}>
                    {!this.props.showEditor ? 'Close Editor 📥' : 'Open Editor 📋'}
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showEditor: state.panel.showEditor
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    openResumifyEditor,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorOpener)
