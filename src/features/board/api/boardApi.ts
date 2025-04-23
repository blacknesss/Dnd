import { INote } from '../../../shared/config/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAction = createAsyncThunk('todos/fetchTodos', async function () {
    const res = await fetch('http://localhost:3005/todo', {
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

export const postAction = createAsyncThunk(
    'todos/postTodos',
    async function ({ inp, board }: { inp: string; board: string }) {
        const newTask: INote = {
            task: inp,
            complete: false,
            board: board,
        };
        await fetch('http://localhost:3005/todo', {
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
        const res = await fetch(`http://localhost:3005/todo/${id}/task`, {
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
    await fetch(`http://localhost:3005/todo/${id}`, {
        method: 'DELETE',
    });

    return id;
});

export const patchBoardAction = createAsyncThunk(
    'todos/patchBoardTodos',
    async function ({ id, board }: { id: number; board: string }) {
        const res = await fetch(`http://localhost:3005/todo/${id}/board`, {
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
