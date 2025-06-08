import { configureStore } from "@reduxjs/toolkit";
import { getAllPost } from "../services/allPostData";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [getAllPost.reducerPath]: getAllPost.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getAllPost.middleware)

})

setupListeners(store.dispatch)