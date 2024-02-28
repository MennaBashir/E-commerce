
import { configureStore } from "@reduxjs/toolkit";
import Operations from "./Operation";
export const store = configureStore({
    reducer: {
        operation: Operations
    }
})
