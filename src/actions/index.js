import {
    NEW_RESUME,
    TOGGLE_TOOLS,
    CHANGE_FONT,
    TOGGLE_SHOW_ITEM,
    CHANGE_RESUME_ORDER,
    OPEN_RESUME_EDITOR,
    UPDATE_RESUME,
    UPDATE_EDITOR_STATUS
} from './actionsType';

export const newResume = () => {
    return dispatch => {
        dispatch({
            type: NEW_RESUME
        });
    }
}

export const toggleTools = () => {
    return dispatch => {
        dispatch({
            type: TOGGLE_TOOLS
        });
    }
};

export const toggleShowItem = item => {
    return dispatch => {
        dispatch({
            type: TOGGLE_SHOW_ITEM,
            item
        });
    }
};

export const changeResumeOrder = (order) => {
    return dispatch => {
        dispatch({
            type: CHANGE_RESUME_ORDER,
            order: order
        });
    }
};

export const openResumifyEditor = () => {
    return dispatch => {
        dispatch({
            type: OPEN_RESUME_EDITOR
        });
    }
};

export const updateResume = (resume) => {
    return dispatch => {
        dispatch({
            type: UPDATE_RESUME,
            resume
        });
    }
};

export const updateResumeEditorStatus = (status) => {
    return dispatch => {
        dispatch({
            type: UPDATE_EDITOR_STATUS,
            status
        });
    }
};