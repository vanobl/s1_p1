// Исходное состояние общей суммы
const defaultState = {
    number: 0
};

//Редьюсер номера заказа
const orderNumber = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_NUMBER':
            return {...state, number: action.newNumber};
        default:
            return state;
    }
}


export default orderNumber;