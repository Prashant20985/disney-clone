import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import userSlice from "../features/users/userSlice";
import movieSlice from "../features/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});