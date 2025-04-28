import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAction } from "../api/boardApi";
import { INote, IState } from "../../../shared/config/types";



const initialState:IState | undefined = {
    todos: [],
    done: 0,
}

const boardSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setDone: (state, action) => {
            state.done = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAction.fulfilled, (state, action:PayloadAction<INote[]>) => {
            state.todos = action.payload;
        })
    },
});
export const {setDone} = boardSlice.actions;
export default boardSlice.reducer;