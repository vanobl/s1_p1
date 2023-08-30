// Исходное состояние списка ингредиентов
const defaultIngredientsList = {
    list: null
}

// Редьюсер списка ингредиентов
const ingredientsList = (state = defaultIngredientsList, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            if (!state.list) {
                state.list = {};
            }
            if (!state.list[action.newIngredient.type]) {
                state.list[action.newIngredient.type] = [];
            }
            state.list[action.newIngredient.type].push(action.newIngredient);
            return {...state, list: state.list};
        case 'REMOVE_FROM_LIST':
            let idx = state.list[action.removeIngredient.type].indexOf(action.removeIngredient);
            if (idx !== -1) {
                state.list.splice(idx, 1);
                return state;
            } else {
                return state;
            }
        default:
            if (!state.list) {
                state.list = {};
            }
            return state;
    }
}

export default ingredientsList;