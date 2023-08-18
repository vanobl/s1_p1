import { combineReducers } from "redux";

// Исходное состояние общей суммы
const defaultState = {
    totalSum: 0,
};

// Редьюсер общей суммы
const totalSum = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREASE_AMOUNT':
            return {...state, totalSum: state.totalSum + action.newSum};
        case 'REDUCE_AMOUNT':
            return {...state, totalSum: state.totalSum - action.newSum};
        default:
            return state;

    }
}


// Корневой редьюсер
export const rootReducer = combineReducers({totalSum})