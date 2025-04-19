export interface INote {
    id?: string;
    task?: string;
    complete?: boolean;
    board?: string;
}
export interface IState {
    todos: INote[];
}