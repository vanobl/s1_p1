// Исходное состояние выбранного ингредиента
const defaultSelectedIngredient = {
    ingredient: null
}

const selectedIngredient = (state = defaultSelectedIngredient, action) => {
    switch (action.type) {
        case 'SET_INGREDIENT':
            if (!state.ingredient) {
                state.ingredient = {};
            }
            return {...state, ingredient: action.ingredient};
        case 'DELETE_INGREDIENT':
            return {...state, ingredient: {}};
        default:
            if (!state.ingredient) {
                state.ingredient = {};
            }
            return state;
    }
}

export default selectedIngredient;