import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {filmsApi} from "./Films/Films.api";
import {filmsSlice} from "./Films/FilmsSlice";
import rootReducer from "../reducer";
import {FavoriteFilmsSlice} from "./Films/FavoriteFilmsSlice";
export default configureStore({
    reducer: {
        reducer: rootReducer,
        [filmsApi.reducerPath]: filmsApi.reducer,
    },
    middleware: getDefaultMiddleware1 => getDefaultMiddleware().concat(filmsApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>

