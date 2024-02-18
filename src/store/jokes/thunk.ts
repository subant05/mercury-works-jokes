import { Dispatch } from "redux"
import { loaderActions } from "../loader"
import { IJoke } from "../../model/interface/joke"
import { jokeActions } from "./slice"

export const getJoke = () => {
    return  async (dispatch:Dispatch) => {
         dispatch(loaderActions.load())
         try{
             const response = await fetch('https://mwks-joke-service.azurewebsites.net/api/joke/random',{
                 method:"Get",
                 headers:{
                     "Content-Type":"application/json"
                 }
             })
 
             if(!response.ok){
                 const msg = response.text()
                 throw new Error("Error: " + msg)
             }
 
             const joke:IJoke = await response.json()

             dispatch(jokeActions.next({...joke, error: false}))
         } catch(e: any){
             console.error(e.message)
             console.error(e.stack)
             dispatch(jokeActions.next({joke: e.message, error:true}))
         } finally {
             dispatch(loaderActions.unload())
         }
 
     }
 }