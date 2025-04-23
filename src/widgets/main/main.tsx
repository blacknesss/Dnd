import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/board/model/hooks';
import { AddTask, MainWrapper, Task } from '../../styles/main';
import {
    fetchAction,
    postAction,
    deleteAction,
    patchBoardAction,
    patchAction,
} from '../../features/board/api/boardApi';
import { Modal } from '../../shared/ui/modal.tsx';
import ModalChange, { ButtonRow, Input } from '../../features/board/ui/modalChange.tsx';
import { BOARDS } from '../../shared/config/constants.ts';

export default function Main() {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.todos);
    const [draggedId, setDraggedId] = useState<number | null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [id, setId] = useState<number>();
    const [modal, setModal] = useState<{ open: boolean; board: string }>({
        open: false,
        board: BOARDS[0].key,
    });

    useEffect(() => {
        dispatch(fetchAction());
    }, [dispatch]);

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

    const handleChangeCard = async (id: number, text: string) => {
        if (text && text.length > 0) {
            await dispatch(patchAction({ currentInput: text, id: id }));
            await dispatch(fetchAction());
            await setIsActive(false);
            await setText('');
        }
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
                            .map((t) => {
                                return (
                                    <Task
                                        onClick={() => {
                                            setIsActive(true), setId(Number(t.id));
                                        }}
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
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDelete(Number(t.id));
                                                }}
                                            />
                                        </div>
                                        <p className='name'>Денис Иванов</p>
                                        <p className='loading'>{board.label}</p>
                                        <p className='add-author'>Добавить ответственного</p>
                                    </Task>
                                );
                            })}
                    </div>
                    <AddTask onClick={() => setModal({ open: true, board: board.key })}>
                        <img src='lucide_plus.png' alt='#' />
                        <p>Новая задача</p>
                    </AddTask>
                </div>
            ))}
            <ModalChange isActive={isActive} setIsActive={setIsActive}>
                <Input
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Введите текст задачи'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleChangeCard(id!, text);
                    }}
                />
                <ButtonRow>
                    <button onClick={() => handleChangeCard(id!, text)}>Изменить</button>
                    <button onClick={() => setIsActive(false)}>Отмена</button>
                </ButtonRow>
            </ModalChange>

            <Modal
                isOpen={modal.open}
                onClose={() => setModal({ ...modal, open: false })}
                onSubmit={handleAddTask}
            />
        </MainWrapper>
    );
}
