import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogData: [

    ]
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        blogDetail: (state, action) => {
            
            state.blogData = action.payload
            
        }
    }
})

export const { blogDetail } = blogSlice.actions;
export default blogSlice.reducer;