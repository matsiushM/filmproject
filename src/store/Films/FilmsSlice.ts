import {FilmInfo, NewPage} from "../../models/models";
import {createSlice} from "@reduxjs/toolkit";


const initialState: NewPage<FilmInfo> = {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
};
export const filmsSlice = createSlice({
    name: "filmsList",
    initialState,
    reducers: {
        addFilms: (state, action) => {
            state = action.payload
            return state;
        }},
    });
export const {addFilms} = filmsSlice.actions;
export default filmsSlice.reducer;