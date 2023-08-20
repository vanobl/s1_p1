// Исходное состояние списка ингредиентов
const defaultIngredientsList = {
    list: []
}

// Редьюсер списка ингредиентов
const ingredientsList = (state = defaultIngredientsList, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return {...state, list: state.list.push(action.newList)};
        default:
            return state;
    }
}

export default ingredientsList;