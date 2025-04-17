import { INote } from "../../../shared/config/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAction = createAsyncThunk(
    'todos/fetchTodos',
    async function (inp:string, {rejectWithValue}) {
        try{
            const res = await fetch('https://pet-wioa.onrender.com/todo')
            
            if(!res.ok){
                throw new Error(`server error`)
            }

            let data:INote[] = await res.json();
            if (inp) {
                data = data.filter(item => {
                    return item.task?.toLowerCase().includes(inp.toLowerCase())
                })
            }
            
            return data

        } catch(error:unknown){
            if(error instanceof Error){
                return rejectWithValue(error.message);
            }
        }
    }
)

export const postAction = createAsyncThunk(
    'todos/postTodos',
    async function (inp:string, {rejectWithValue}) {
        try{
            const newTask:INote = {
                task: inp,
                complete: false,
            }
            const res = await fetch('https://pet-wioa.onrender.com/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask)
            })
            
            if (!res.ok) {
                throw new Error(`Server error!`);
            }
        }catch(error:unknown){
            if(error instanceof Error){
                return rejectWithValue(error.message);
            }
        }
    }
)

export const patchAction = createAsyncThunk(
    'todos/patchTodos',
    async function ({currentInput, id}:{currentInput:string, id:number}, {rejectWithValue}) {
        try{
            const newTask:INote = {
                task: currentInput
            }
            const res = await fetch(`https://pet-wioa.onrender.com/todo/${id}/task`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask)
            })
            
            if (!res.ok) {
                throw new Error(`Server error!`);
            }

            return await res.json()
        }catch(error:unknown){
            if(error instanceof Error){
                return rejectWithValue(error.message);
            }
        }
    }
)

export const patchCompleteAction = createAsyncThunk(
    'todos/patchCompleteTodos',
    async function ({value, id}:{value:boolean, id:number}, {rejectWithValue}) {
        try{
            
            const res = await fetch(`https://pet-wioa.onrender.com/todo/${id}/complete`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    complete: value
                })
            })
            
            if (!res.ok) {
                throw new Error(`Server error!`);
            }
            
            return await res.json()
        }catch(error:unknown){
            if(error instanceof Error){
                return rejectWithValue(error.message);
            }
        }
    }
)

export const deleteAction = createAsyncThunk(
    'todos/deleteTodos',
    async function (id:number, {rejectWithValue}) {
        console.log(id)
        try{
            const res = await fetch(`https://pet-wioa.onrender.com/todo/${id}`, {
                method: 'DELETE',
            })
            
            if (!res.ok) {
                throw new Error(`Server error!`);
            }

            return id
        }catch(error:unknown){
            if(error instanceof Error){
                return rejectWithValue(error.message);
            }
        }
    }
)