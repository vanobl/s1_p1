const defaultIngredientsInOrder = {
    list: [],
    totalSum: 0
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
        if (!state.list.find(ingredient => ingredient._id === action.ingredient._id)) {
            state.list.push(action.ingredient);
        }
      } else {
        let idx = state.list.findIndex(ingredient => ingredient.type === 'bun');
        if (idx !== -1) {
          state.list.splice(idx, 1);
          state.list.push(action.ingredient);
        } else {
          state.list.push(action.ingredient);
        }
      }
      return {...state, list: state.list, totalSum: getTotalSum()};
    case 'DRAG_ELEMENT_IN_ORDER':
      let newList = [...state.list];

      let dragElement = newList.find(ingredient => ingredient._id === action.drag_id);

      let dragIndex = newList.findIndex(ingredient => ingredient._id === action.drag_id);

      let hoverIndex = newList.findIndex(ingredient => ingredient._id === action.hover_id);
      
      newList.splice(dragIndex, 1);
      newList.splice(hoverIndex, 0, dragElement);

      return {...state, list: newList, totalSum: getTotalSum()};
    case 'REMOVE_FROM_LIST_ORDER':
      let element = state.list.find(ingredient => ingredient._id === action.ingredient_id)
      let idx = state.list.indexOf(element);
      if (idx !== -1) {
        state.list.splice(idx, 1);
      }
      return {...state, list: state.list, totalSum: getTotalSum()};
    default:
      return state;
  }
};

export default ingredientsInOrder;