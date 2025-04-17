import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAction } from "../api/boardApi";
import { INote, IState } from "../../../shared/config/types";



const initialState:IState = {
    todos: [],
    tasks: [],
    local: {
        inp: '',
    },
    status: null,
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setInput: (state, action:PayloadAction<string>) =>{
            state.local.inp = action.payload
        },
        setTasks: (state, action:PayloadAction<INote[] | undefined>) =>{
            state.tasks = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAction.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = 'succesfully'
        }).addCase(fetchAction.pending, (state) =>{
            state.status = 'loading'
        }).addCase(fetchAction.rejected, (state, action) => {
            state.status = 'unsuccesfully';
            state.error = action.payload;
        })
    },
});
export const {setInput, setTasks} = todoSlice.actions;
export default todoSlice.reducer;