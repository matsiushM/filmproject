import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {filmsApi} from "./Films/Films.api";
import rootReducer from "./reducer";
export default configureStore({
    reducer: {
        reducer: rootReducer,
        [filmsApi.reducerPath]: filmsApi.reducer,
    },
    middleware: getDefaultMiddleware1 => getDefaultMiddleware().concat(filmsApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>

