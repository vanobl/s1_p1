const removeIngredientsFromOrder = (ingredient) => ({
    type: 'REMOVE_FROM_LIST_ORDER',
    ingredient_index: ingredient
});

export default removeIngredientsFromOrder;