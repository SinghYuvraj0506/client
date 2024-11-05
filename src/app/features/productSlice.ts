import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { categoryDataType, ProductSlice, ProductType } from "../../lib/types";

const initialState:ProductSlice = {
    featured: [],
    categoryData: []
}

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setFeatured:(state,action:PayloadAction<{data:ProductType[]}>) =>{
            state.featured = action.payload.data;
        },
        setCategoryData:(state,action:PayloadAction<{data:categoryDataType[]}>) =>{
            state.categoryData = action.payload.data;
        },
    }
})


export const {setCategoryData, setFeatured} = productSlice.actions;