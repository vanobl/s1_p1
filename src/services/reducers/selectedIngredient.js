// Исходное состояние выбранного ингредиента
const defaultSelectedIngredient = {
    ingredient: {}
}

const selectedIngredient = (state = defaultSelectedIngredient, action) => {
    switch (action.type) {
        case 'SET_INGREDIENT':
            return {...state, ingredient: action.ingredient};
        case 'DELETE_INGREDIENT':
            return {...state, ingredient: {}};
        default:
            return state;
    }
}

export default selectedIngredient;