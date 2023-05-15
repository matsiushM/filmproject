import {FilmInfo} from "../../models/models";
import {createSlice} from "@reduxjs/toolkit";

interface FavoriteFilmsState{
    films: FilmInfo[]
}

const initialState:FavoriteFilmsState={
    films: []
}
export const FavoriteFilmsSlice = createSlice({
    name: 'favoriteFilms',
    initialState,
    reducers: {
        addFavoriteFilm:(state,action) => {
            state.films = action.payload;
        }
    }
});

export default FavoriteFilmsSlice.reducer;
export const {addFavoriteFilm} =FavoriteFilmsSlice.actions;