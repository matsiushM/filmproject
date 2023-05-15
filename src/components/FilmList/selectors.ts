import {RootState} from "../../store/store";

// @ts-ignore
export const selectFilm = (state:RootState) => state.reducer.films;