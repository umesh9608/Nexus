import { createSlice } from "@reduxjs/toolkit";


const reactslicer = createSlice({
    name: "Slice1",
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => { state.count = state.count + 1 },
        Decrement: (state) => { state.count = state.count - 1 },
        Reset: (state) => { state.count = 0 },
        CustomIcreaser:(state,actions) =>{state.count+=actions.payload}
    }
})

export const {Increment,Decrement,Reset,CustomIcreaser} = reactslicer.actions
export default reactslicer.reducer;