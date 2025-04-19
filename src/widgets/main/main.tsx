import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/board/model/hooks';
import { AddTask, MainWrapper, Task } from '../../styles/main';
import {
    fetchAction,
    postAction,
    deleteAction,
    patchBoardAction,
} from '../../features/board/api/boardApi';
import { Modal } from '../../shared/ui/modal.tsx';

const BOARDS = [
    { key: 'todo', label: 'Интервью' },
    { key: 'inprogress', label: 'В работе' },
    { key: 'done', label: 'Готово' },
];

export default function Main() {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.todos);

    const [modal, setModal] = useState<{ open: boolean; board: string }>({
        open: false,
        board: BOARDS[0].key,
    });

    useEffect(() => {
        dispatch(fetchAction());
    }, [dispatch]);


    const [draggedId, setDraggedId] = useState<number | null>(null);

    const handleDragStart = (id: number) => setDraggedId(id);
    const handleDrop = async (board: string) => {
        if (draggedId !== null) {
            await dispatch(patchBoardAction({ id: draggedId, board }));
            setDraggedId(null);
            await dispatch(fetchAction());
        }
    };

    const handleAddTask = async (text: string) => {
        await dispatch(postAction({ inp: text, board: modal.board }));
        setModal({ ...modal, open: false });
        await dispatch(fetchAction());
    };

    const handleDelete = async (id: number) => {
        await dispatch(deleteAction(id));
        await dispatch(fetchAction());
    };

    return (
        <MainWrapper>
            {BOARDS.map((board) => (
                <div
                    key={board.key}
                    className={board.key}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(board.key)}
                >
                    <div className='task-wrapper'>
                        {tasks
                            .filter((t) => t.board === board.key)
                            .map((t) => (
                                <Task
                                    key={t.id}
                                    draggable
                                    onDragStart={() => handleDragStart(Number(t.id))}
                                    onDragEnd={() => setDraggedId(null)}
                                >
                                    <div>
                                        <h2>{t.task}</h2>
                                        <img
                                            src='lucide_trash-2.png'
                                            alt='#'
                                            onClick={() => handleDelete(Number(t.id))}
                                        />
                                    </div>
                                    <p className='name'>Денис Иванов</p>
                                    <p className='loading'>{board.label}</p>
                                    <p onClick={() => {}} className='add-author'>Добавить ответственного</p>
                                </Task>
                            ))}
                    </div>
                    <AddTask onClick={() => setModal({ open: true, board: board.key })}>
                        <img src='lucide_plus.png' alt='#' />
                        <p>Новая задача</p>
                    </AddTask>
                </div>
            ))}
            <Modal
                isOpen={modal.open}
                onClose={() => setModal({ ...modal, open: false })}
                onSubmit={handleAddTask}
            />
        </MainWrapper>
    );
}
