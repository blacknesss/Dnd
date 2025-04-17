import { AddTask, MainWrapper, Task } from "../../styles/main";



export default function Main() {
  return (
    <MainWrapper>
        <div className="left">
            <div className="task-wrapper">
                <Task className="task">
                    <div>
                        <h2>{`Регистрация/Вход`}</h2>
                        <img src="lucide_trash-2.png" alt="#" />
                    </div>
                    <p className="name">{`Денис Иванов`}</p>
                    <p className="loading">Интервью</p>
                    <p className="add-author">Добавить ответственного</p>
                </Task>
                <Task className="task">
                    <div>
                        <h2>{`Регистрация/Вход`}</h2>
                        <img src="lucide_trash-2.png" alt="#" />
                    </div>
                    <p className="name">{`Денис Иванов`}</p>
                    <p className="loading">Интервью</p>
                    <p className="add-author">Добавить ответственного</p>
                </Task>
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
                    <p className="loading">Интервью</p>
                    <p className="add-author">Добавить ответственного</p>
                </Task>
                <Task className="task">
                    <div>
                        <h2>{`Регистрация/Вход`}</h2>
                        <img src="lucide_trash-2.png" alt="#" />
                    </div>
                    <p className="name">{`Денис Иванов`}</p>
                    <p className="loading">Интервью</p>
                    <p className="add-author">Добавить ответственного</p>
                </Task>
            </div>
            <AddTask>
                <img src="lucide_plus.png" alt="#" />
                <p>Новая задача</p>
            </AddTask>
        </div>
        <div className="right">
            <Task className="task">
                <div>
                    <h2>{`Регистрация/Вход`}</h2>
                    <img src="lucide_trash-2.png" alt="#" />
                </div>
                <p>{`Денис Иванов`}</p>
                <p className="loading">Готово</p>
                <p className="add-author">Добавить ответственного</p>
            </Task>
            <AddTask>
                <img src="lucide_plus.png" alt="#" />
                <p>Новая задача</p>
            </AddTask>
        </div>
    </MainWrapper>
  )
}
