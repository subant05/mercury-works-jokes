import { configureStore } from "@reduxjs/toolkit";
import JokesReducer from './jokes'

const store = configureStore({
    reducer: {
        jokes: JokesReducer
    }
})

export default store