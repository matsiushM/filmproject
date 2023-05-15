import {combineReducers} from "@reduxjs/toolkit";
import {filmsSlice} from "./store/Films/FilmsSlice";

const rootReducer = combineReducers({
    films: filmsSlice.reducer,
});

export default rootReducer;