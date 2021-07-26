import { combineReducers, createStore } from "redux";
import DatVeReducer from "./DatVeReducer";


const rootReducer = combineReducers({
    DatVeReducer,
})

export const store = createStore(rootReducer);