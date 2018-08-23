import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {
    changeResumeOrder
} from '../../actions';

import {
    EDUCATION,
    SKILLSET,
    PROJECTS,
    EXPERIENCE
} from '../../utils/resumeOrder';

import Sortable from 'sortablejs';

export class OrderChanger extends Component {

    componentDidMount() {
        this.createSortableList();
    }

    createSortableList() {
        Sortable.create(this.orderList, {
            animation: 100,
            dataIdAttr: 'data-id',
            sort: true,
            onUpdate: this.onOrderChange
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps === this.props;
    }

    onOrderChange = (e) => {
        const newResumeOrder = Array.from(e.to.children).map(item => {
            return parseInt(item.getAttribute('data-id'), 10);
        });
        this.props.changeResumeOrder(newResumeOrder);
    }

    getResumeOrderManipulation() {
        let sectionsOfResume = '';
        return this.props.fullResume.map( (item, index) => {
            switch(item) {
                case EDUCATION:
                    sectionsOfResume = 'Education'
                    break;
                case SKILLSET: 
                    sectionsOfResume = 'Technical Skills'
                    break;
                case PROJECTS:
                    sectionsOfResume = 'Projects'
                    break;
                case EXPERIENCE:
                    sectionsOfResume = 'Experience'
                    break;
                default:
                    sectionsOfResume = 'Unknown Section'
                    break;
            }
            return (
                <li key={index} data-id={item}>
                    <div>
                        <span className="drag-handle">☰</span>
                        <span className="section-name">{ sectionsOfResume }</span>
                    </div>
                </li>
            );
        });
    }

    render() {
        const currentOrder = this.getResumeOrderManipulation();
        return (
            <div className="resumify-tools-orderChanger">
                <label htmlFor="resume-order-changer">Resume Order</label>
                <ul id="#resume-order-changer" ref={list => {this.orderList = list;}} >
                    {currentOrder}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    fullResume: state.panel.fullResume
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeResumeOrder,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderChanger)
