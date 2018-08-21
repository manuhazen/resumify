const getItemToToggle = (state, action) => {
    switch(action.item) {
        case 'showAddress':
            return { showAddress : !state.showAddress }
        case 'showEmail':
            return { showEmail : !state.showEmail }
        case 'showPhone':
            return { showPhone : !state.showPhone }
        case 'showGithub':
            return { showGithub: !state.showGithub }
        case 'showTechSkills':
            return { showSkillset: !state.showSkillset }
        case 'showProjects':
            return { showProjects: !state.showProjects }
        case 'showEducation':
            return { showEducation: !state.showEducation }
        case 'showExperience':
            return { showExperience: !state.showExperience }
        case 'showLinkedIn' :
            return { showLinkedIn: !state.showLinkedIn }
        case 'showWebsite' :
            return { showWebsite: !state.showWebsite}
        default:
            return {}
    }
}

export default getItemToToggle;