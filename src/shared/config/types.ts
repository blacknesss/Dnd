export interface INote {
    id?: string;
    task?: string;
    complete?: boolean;
    board?: string;
    name?: string;
}
export interface IState {
    todos: INote[];
    done: number;
}