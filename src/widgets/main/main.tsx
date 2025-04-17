import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../features/board/model/hooks";
import { AddTask, MainWrapper, Task } from "../../styles/main";
import { deleteAction, fetchAction } from "../../features/board/api/boardApi";



export default function Main() {
    let data = useAppSelector(state => state.todos);
    const filteredData = data?.filter(item => {
        return item
    })
    const dispatch = useAppDispatch();
console.log(filteredData);

    const deleteTask = async (id:number) => {
        await dispatch(deleteAction(id));
        await dispatch(fetchAction());
    }


    useEffect(() => {
        dispatch(fetchAction())
    }, [dispatch])
  return (
    <MainWrapper>
        <div className="left">
            <div className="task-wrapper">
                {data?.map(item => (
                    <Task className="task" key={item.id}>
                    <div>
                        <h2>{item.task}</h2>
                        <img onClick={() => deleteTask(Number(item.id))} src="lucide_trash-2.png" alt="#" />
                    </div>
                    <p className="name">{`Денис Иванов`}</p>
                    <p className="loading">Интервью</p>
                    <p className="add-author">Добавить ответственного</p>
                </Task>
                ))}
            </div>
            <AddTask>
                <img src="lucide_plus.png" alt="#" />
                <p>Новая задача</p>
            </AddTask>
        </div>
        <div className="middle">
            <div className="task-wrapper">
                <Task className="task">
                    <div>
                        <h2>{`Регистрация/Вход`}</h2>
                        <img src="lucide_trash-2.png" alt="#" />
                    </div>
                    <p className="name">{`Денис Иванов`}</p>
                    <p className="loading">В работе</p>
                    <p className="add-author">Добавить ответственного</p>
                </Task>
            </div>
            <AddTask>
                <img src="lucide_plus.png" alt="#" />
                <p>Новая задача</p>
            </AddTask>
        </div>
        <div className="right">
            <div className="task-wrapper">
                <Task className="task">
                    <div>
                        <h2>{`Регистрация/Вход`}</h2>
                        <img src="lucide_trash-2.png" alt="#" />
                    </div>
                    <p className="name">{`Денис Иванов`}</p>
                    <p className="loading">Готово</p>
                    <p className="add-author">Добавить ответственного</p>
                </Task>
            </div>
            <AddTask>
                <img src="lucide_plus.png" alt="#" />
                <p>Новая задача</p>
            </AddTask>
        </div>
    </MainWrapper>
  )
}
