import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lawyerData: [

    ]
}

const lawyerSlice = createSlice({
    name: "lawyer",
    initialState,
    reducers: {
        lawyerDetail: (state, action) => {

            state.lawyerData = action.payload

        }
    }
})

export const {lawyerDetail} = lawyerSlice.actions;
export default lawyerSlice.reducer;