import { combineReducers } from "redux";
import totalSum from "./totalSum";
import orderNumber from "./orderNumber";
import ingredientsList from "./ingredientsList";

// Корневой редьюсер
const rootReducer = combineReducers({totalSum, orderNumber, ingredientsList});

export default rootReducer;