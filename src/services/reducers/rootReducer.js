import { combineReducers } from "redux";
import totalSum from "./totalSum";
import orderNumber from "./orderNumber";

// Корневой редьюсер
const rootReducer = combineReducers({totalSum, orderNumber});

export default rootReducer;