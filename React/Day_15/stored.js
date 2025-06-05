import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './Slice2'
const stores = configureStore({
    reducer:{
        slice2:CardReducer
    }
})

export default stores