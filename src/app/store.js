import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import userSlice from "../features/users/userSlice";

export default configureStore({
    reducer: {
        user: userSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});