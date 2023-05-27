import { createSlice } from "@reduxjs/toolkit";

const savedSlice=createSlice({
    name:"Saved",
    initialState:{
        savedPlacesArray:[]
    },
    reducers:{
        savedPlaces:(state,action)=>{
            state.savedPlacesArray.push({...action.payload})

        }
    }
})

export const {savedPlaces} =savedSlice.actions
export default savedSlice.reducer