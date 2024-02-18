import { configureStore } from "@reduxjs/toolkit";
import JokesReducer from './jokes'
import LoaderReducer from './loader'

const store = configureStore({
    reducer: {
        jokes: JokesReducer,
        loader: LoaderReducer
    }
})

export default store