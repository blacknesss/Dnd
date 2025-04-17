export interface INote {
    id?: string;
    task?: string;
    complete?: boolean;
}
export interface IState {
    todos: INote[] | undefined;
    tasks: INote[] | undefined;
    local: {
        inp: string;
    }
    status: null | string;
    error: null | unknown;
}