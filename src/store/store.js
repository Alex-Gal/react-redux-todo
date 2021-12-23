import { configureStore, createStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { reducer } from "./reducers/filter";

export const store = configureStore({
    reducer: reducers
})