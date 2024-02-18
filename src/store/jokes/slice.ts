import { createSlice } from "@reduxjs/toolkit";
import { type IJoke, type IJokeAction } from "../../model/interface/joke";


const initialState:Array<IJoke> = []

const jokes = createSlice({
    name:"joke",
    initialState,
    reducers: {
        next(state: IJoke[], actions: IJokeAction){
                state.push(actions.payload)
        }
    }
})

export const jokeActions = jokes.actions
export default jokes.reducer