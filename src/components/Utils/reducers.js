import { combineReducers } from "redux";

// Исходное состояние общей суммы
const initialTotalSum = 0;

// Редьюсер общей суммы
const totalSum = (state = initialTotalSum, action) => {
    switch (action.type) {
        case 'INCREASE_AMOUNT':
            return state + action.newSum;
        case 'REDUCE_AMOUNT':
            return state - action.newSum;
        default:
            return state;

    }
}


// Корневой редьюсер
export const rootReducer = combineReducers({totalSum})