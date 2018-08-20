import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';

import ResumeReducers from './resume-reducers';
import PanelReducers from './panel-reducers';

const reducers = {
    loadingBar: loadingBarReducer,
    resume: ResumeReducers,
    panel: PanelReducers,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
