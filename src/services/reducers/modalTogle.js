const defaultModalTogle = {
    togle: false
}

const modalTogle = (state = defaultModalTogle, action) => {
    switch (action.type) {
        case 'SHOW':
            return {...state, togle: true};
        case 'HIDE':
            return {...state, togle: false};
        default:
            return state;
    }
}

export default modalTogle;