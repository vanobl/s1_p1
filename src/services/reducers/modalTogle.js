const defaultModalTogle = {
    togle: false,
    togleOrder: false
}

const modalTogle = (state = defaultModalTogle, action) => {
    switch (action.type) {
        case 'SHOW':
            return {...state, togle: true};
        case 'HIDE':
            return {...state, togle: false, togleOrder: false};
        case 'SHOW_ORDER':
            return {...state, togleOrder: true};
        // case 'HIDE_ORDER':
        //     return {...state, togleOrder: false};
        default:
            return state;
    }
}

export default modalTogle;