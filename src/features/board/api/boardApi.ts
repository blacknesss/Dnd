import { INote } from '../../../shared/config/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAction = createAsyncThunk('todos/fetchTodos', async function () {
    const res = await fetch('https://pet-wioa.onrender.com/todo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        mode: 'cors',
    });
    let data: INote[] = await res.json();

    return data;
});

export const postAction = createAsyncThunk('todos/postTodos', async function (inp: string) {
    const newTask: INote = {
        task: inp,
        complete: false,
    };
    const res = await fetch('https://pet-wioa.onrender.com/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    });
});

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

export const patchCompleteAction = createAsyncThunk(
    'todos/patchCompleteTodos',
    async function ({ value, id }: { value: boolean; id: number }) {
        const res = await fetch(`https://pet-wioa.onrender.com/todo/${id}/complete`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                complete: value,
            }),
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
