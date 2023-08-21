// Исходное состояние списка ингредиентов
const defaultIngredientsList = {
    list: []
}

// Редьюсер списка ингредиентов
const ingredientsList = (state = defaultIngredientsList, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            state.list.push(action.newIngredient);
            return {...state, list: state.list};
            // return {...state, list: state.list.push(action.newIngredient)};
        case 'REMOVE_FROM_LIST':
            let idx = state.list.indexOf(action.newList);
            if (idx !== -1) {
                return state.list.splice(idx, 1);
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default ingredientsList;