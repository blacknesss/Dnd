import { INote } from '../../../shared/config/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAction = createAsyncThunk('todos/fetchTodos', async function () {
    const res = await fetch('https://pet-wioa.onrender.com/todo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    });
    let data: INote[] = await res.json();

    return data;
});

export const postAction = createAsyncThunk(
    'todos/postTodos',
    async function ({ inp, board, name }: { inp: string; board: string, name:string | undefined }) {
        const newTask: INote = {
            task: inp,
            complete: false,
            board: board,
            name: name,
        };
        await fetch('https://pet-wioa.onrender.com/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });
    },
);

export const patchAction = createAsyncThunk(
    'todos/patchTodos',
    async function ({ currentInput, id }: { currentInput: string; id: number }) {
        const newTask: INote = {
            task: currentInput,
        };
        const res = await fetch(`https://pet-wioa.onrender.com/todo/${id}/task`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });

        return await res.json();
    },
);

export const deleteAction = createAsyncThunk('todos/deleteTodos', async function (id: number) {
    await fetch(`https://pet-wioa.onrender.com/todo/${id}`, {
        method: 'DELETE',
    });

    return id;
});

export const patchBoardAction = createAsyncThunk(
    'todos/patchBoardTodos',
    async function ({ id, board }: { id: number; board: string }) {
        const res = await fetch(`https://pet-wioa.onrender.com/todo/${id}/board`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                board: board,
            }),
        });

        return await res.json();
    },
);

export const patchNameAction = createAsyncThunk(
    'todos/patchNameTodos',
    async function ({id, name}: {id:number; name: string}) {
        const res = await fetch(`https://pet-wioa.onrender.com/todo/${id}/name`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
            }),
        })

        return await res.json();
    }
)