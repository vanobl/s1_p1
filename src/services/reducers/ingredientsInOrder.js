const defaultIngredientsInOrder = {
    list: []
}

const ingredientsInOrder = (state = defaultIngredientsInOrder, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST_ORDER':
      if (action.ingredient) {
        if (action.ingredient.type !== 'bun') {
          if (!state.list.find(ingredient => ingredient._id === action.ingredient._id)) {
              state.list.push(action.ingredient);
          }
        } else {
          let idx = state.list.indexOf(action.ingredient);
          if (idx !== -1) {
            state.list.splice(idx, 1);
          } else {
            state.list.push(action.ingredient);
          }
        }
      }
      return {...state, list: state.list};
    case 'REMOVE_FROM_LIST':
      // let idx = state.list.indexOf(action.ingredient);
      // if (idx !== -1) {
      //   state.list.splice(idx, 1);
      //   return state;
      // }
      return {...state, list: state.list};
    default:
      return state;
  }
};

export default ingredientsInOrder;