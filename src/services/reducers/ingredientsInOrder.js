const defaultIngredientsInOrder = {
    list: [],
    totalSum: 0,
    lastUpdate: ''
}

const getTotalSum = (state = defaultIngredientsInOrder) => {
  let total = 0;

  state.list.map((ingredient) => {
    if (ingredient.type === 'bun') {
      total = total + (ingredient.price * 2);
    } else {
      total = total + ingredient.price;
    }
  });

  return total;
}

const ingredientsInOrder = (state = defaultIngredientsInOrder, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST_ORDER':
      if (action.ingredient.type !== 'bun') {
        state.list.push(action.ingredient);
      } else {
        let idx = state.list.findIndex(ingredient => ingredient.type === 'bun');
        if (idx !== -1) {
          state.list.splice(idx, 1, action.ingredient);
        } else {
          state.list.push(action.ingredient);
        }
      }
      return {...state, list: state.list, totalSum: getTotalSum(), lastUpdate: Date()};
    case 'DRAG_ELEMENT_IN_ORDER':
      let newList = [...state.list];

      let dragElement = newList[action.drag_index];

      // let dragIndex = newList.findIndex(ingredient => ingredient._id === action.drag_id);

      // let hoverIndex = newList.findIndex(ingredient => ingredient._id === action.hover_id);
      
      newList.splice(action.drag_index, 1);
      newList.splice(action.hover_index, 0, dragElement);

      return {...state, list: newList, totalSum: getTotalSum(), lastUpdate: Date()};
    case 'REMOVE_FROM_LIST_ORDER':
      let oldList = [...state.list];
      oldList.splice(action.ingredient_index, 1);
      return {...state, list: oldList, totalSum: getTotalSum(), lastUpdate: Date()};
    default:
      return state;
  }
};

export default ingredientsInOrder;