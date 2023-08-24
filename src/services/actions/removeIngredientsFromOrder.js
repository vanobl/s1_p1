const removeIngredientsFromOrder = (ingredient) => ({
    type: 'REMOVE_FROM_LIST_ORDER',
    ingredient_id: ingredient
});

export default removeIngredientsFromOrder;