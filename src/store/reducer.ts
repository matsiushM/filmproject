import {combineReducers} from "@reduxjs/toolkit";
import {filmsSlice} from "./Films/FilmsSlice";

const rootReducer = combineReducers({
    films: filmsSlice.reducer,
});
export default rootReducer;