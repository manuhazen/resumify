import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {changeBodyFonts, changeHeaderFonts} from '../../actions/';
import fonts from '../../utils/fonts';

export class FontSelector extends Component {

    handleFontChange = e => {
        const selectedFont = e.target.selectedIndex;
        const selected = fonts[selectedFont].font;
        this.props.changeBodyFonts(selected);
    };

    handleHeaderFontChange = e => {
        const selectedFont = e.target.selectedIndex;
        const selected = fonts[selectedFont].font;
        this.props.changeHeaderFonts(selected);
    };

    render() {

        const fontsList = fonts.sort( (f1, f2) => {
            return f1.name < f2.name ? -1 : f1.name > f2.name ? 1 : 0;
        }).map( (font, index) => {
            return <option value={font.font} key={index}> {font.name} </option>
        })
        return (
            <div>
                <div className="resumify-panel-fontSelector">
                    <label htmlFor="fontSelector" style={{ fontFamily: this.props.headerFont }}>Header Font</label>
                    <select className="select" id="fontSelector"
                        onChange={this.handleHeaderFontChange}
                        defaultValue={this.props.headerFont}>
                        {fontsList}
                    </select>
                </div>

                <div className="resumify-panel-fontSelector">
                    <label htmlFor="fontSelector" style={{ fontFamily: this.props.bodyFont }}>Body Font</label>
                    <select className="select" id="fontSelector"
                        onChange={this.handleFontChange}
                        defaultValue={this.props.bodyFont}>
                        {fontsList}
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bodyFont: state.panel.bodyFont,
    headerFont: state.panel.headerFont,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeBodyFonts,
    changeHeaderFonts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FontSelector)
