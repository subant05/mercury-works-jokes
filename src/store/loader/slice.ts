import { createSlice } from "@reduxjs/toolkit";
import { ILoaderAction } from "../../model/interface/loader";

const loader = createSlice({
    name:"loading",
    initialState:{isLoading:false},
    reducers: {
        load:(state:{isLoading:boolean})=>{
            state.isLoading = true
        },
        unload:(state:{isLoading:boolean})=>{
            state.isLoading = false
        },
        toggle:(state:{isLoading:boolean})=>{
            state.isLoading = !state
        },
        setLoader:(state:{isLoading:boolean}, actions:ILoaderAction)=>{
            state.isLoading = actions.payload
        }
    }
})

export const loaderActions = loader.actions
export default loader.reducer