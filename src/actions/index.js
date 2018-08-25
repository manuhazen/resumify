import {
    NEW_RESUME,
    TOGGLE_TOOLS,
    CHANGE_FONT,
    TOGGLE_SHOW_ITEM,
    CHANGE_RESUME_ORDER,
    OPEN_RESUME_EDITOR,
    UPDATE_RESUME,
    CHANGE_HEADER_FONT,
    UPDATE_EDITOR_STATUS
} from './actionsType';

export const newResume = () => ({
    type: NEW_RESUME
});

export const toggleTools = () => ({
    type: TOGGLE_TOOLS
});

export const changeResumeOrder = (order) => ({
    type: CHANGE_RESUME_ORDER,
    order: order
});

export const openResumifyEditor = () => ({
    type: OPEN_RESUME_EDITOR
});

export const updateResume = (resume) => ({
    type: UPDATE_RESUME,
    resume
});

export const updateEditorStatus = (status) => ({
    type: UPDATE_EDITOR_STATUS,
    status
});

export const changeBodyFonts = (font) => ({
    type: CHANGE_FONT,
    font
});

export const changeHeaderFonts = (font) => ({
    type: CHANGE_HEADER_FONT,
    font
});

export const toggleShowItem = (item) => ({
    type: TOGGLE_SHOW_ITEM,
    item
})