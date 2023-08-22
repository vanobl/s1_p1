import { combineReducers } from "redux";
import totalSum from "./totalSum";
import orderNumber from "./orderNumber";
import ingredientsList from "./ingredientsList";
import modalTogle from "./modalTogle";
import selectedIngredient from "./selectedIngredient";

// Корневой редьюсер
const rootReducer = combineReducers({totalSum, orderNumber, ingredientsList, modalTogle, selectedIngredient});

export default rootReducer;