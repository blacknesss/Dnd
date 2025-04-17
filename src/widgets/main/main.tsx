import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../features/board/model/hooks";
import { AddTask, MainWrapper, Task } from "../../styles/main";
import { fetchAction, postAction, deleteAction } from "../../features/board/api/boardApi";
import { Modal } from "../../shared/ui/Modal";

// Локальные статусы для колонок (только на фронте)
const BOARDS = [
  { key: "todo", label: "Интервью" },
  { key: "inprogress", label: "В работе" },
  { key: "done", label: "Готово" },
];

export default function Main() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.todos) ?? [];

  // Локальное распределение задач по колонкам (id -> board)
  const [taskBoards, setTaskBoards] = useState<Record<number, string>>({});
  const [modal, setModal] = useState<{ open: boolean; board: string | null }>({ open: false, board: null });

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  // При первом рендере все задачи попадают в первую колонку
  useEffect(() => {
    if ((tasks?.length ?? 0) > 0 && Object.keys(taskBoards).length === 0) {
      const map: Record<number, string> = {};
      tasks?.forEach(t => { map[Number(t.id)] = "todo"; });
      setTaskBoards(map);
    }
  }, [tasks]);

  // DnD
  const [draggedId, setDraggedId] = useState<number | null>(null);

  const handleDragStart = (id: number) => setDraggedId(id);
  const handleDrop = (board: string) => {
    if (draggedId !== null) {
      setTaskBoards(prev => ({ ...prev, [draggedId]: board }));
      setDraggedId(null);
    }
  };

  // Добавление задачи
  const handleAddTask = async (text: string) => {
    await dispatch(postAction(text));
    setModal({ open: false, board: null });
    setTimeout(() => dispatch(fetchAction()), 200); // Ждём, чтобы сервер успел сохранить
  };

  // После добавления задачи новая задача попадёт в первую колонку (todo)
  useEffect(() => {
    if ((tasks?.length ?? 0) > 0) {
      const ids = Object.keys(taskBoards).map(id => Number(id));
      tasks?.forEach(t => {
        if (!ids.includes(Number(t.id))) {
          setTaskBoards(prev => ({ ...prev, [t.id!]: "todo" }));
        }
      });
    }
  }, [tasks, taskBoards]);

  // Удаление задачи
  const handleDelete = async (id: number) => {
    await dispatch(deleteAction(id));
    setTaskBoards(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
    setTimeout(() => dispatch(fetchAction()), 200);
  };

  return (
    <MainWrapper>
      {BOARDS.map(board => (
        <div
          key={board.key}
          className={board.key}
          onDragOver={e => e.preventDefault()}
          onDrop={() => handleDrop(board.key)}
        >
          <div className="task-wrapper">
            {tasks
              .filter(t => taskBoards[Number(t.id)] === board.key)
              .map(t => (
                <Task
                  key={t.id}
                  draggable
                  onDragStart={() => handleDragStart(Number(t.id))}
                  onDragEnd={() => setDraggedId(null)}
                >
                  <div>
                    <h2>{t.task}</h2>
                    <img
                      src="lucide_trash-2.png"
                      alt="#"
                      onClick={() => handleDelete(Number(t.id))}
                    />
                  </div>
                  <p className="name">Денис Иванов</p>
                  <p className="loading">{board.label}</p>
                  <p className="add-author">Добавить ответственного</p>
                </Task>
              ))}
          </div>
          <AddTask onClick={() => setModal({ open: true, board: board.key })}>
            <img src="lucide_plus.png" alt="#" />
            <p>Новая задача</p>
          </AddTask>
        </div>
      ))}
      <Modal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, board: null })}
        onSubmit={handleAddTask}
      />
    </MainWrapper>
  );
}