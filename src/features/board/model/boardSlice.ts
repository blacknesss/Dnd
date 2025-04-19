import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAction } from "../api/boardApi";
import { INote, IState } from "../../../shared/config/types";



const initialState:IState | undefined = {
    todos: [],
}

const boardSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchAction.fulfilled, (state, action:PayloadAction<INote[]>) => {
            state.todos = action.payload;
        })
    },
});
export default boardSlice.reducer;