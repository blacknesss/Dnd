import { useEffect } from 'react';
import { setDone } from '../../features/board/model/boardSlice';
import { useAppDispatch, useAppSelector } from '../../features/board/model/hooks';
import { HeaderInner, HeaderWrapper } from '../../styles/header';

export default function Header() {
    const tasks = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();
    let todo:number = 0;
    let inprogress:number = 0;
    let done:number = 0;
    
    tasks.forEach((item) => {
        if (item.board === 'todo') {
            todo++;
        }
        if (item.board === 'inprogress') {
            inprogress++;
        }
        if (item.board === 'done') {
            done++
            
          }
    });
    useEffect(()=>{
        dispatch(setDone(done))
    }, [done])

    return (
        <HeaderWrapper>
            <HeaderInner>
                <h3 className='loading' id='loading'>
                    В ожидании
                </h3>
                <label htmlFor='loading'>{todo}</label>
            </HeaderInner>
            <HeaderInner>
                <h3 className='working' id='working'>
                    В работе
                </h3>
                <label htmlFor='working'>{inprogress}</label>
            </HeaderInner>
            <HeaderInner>
                <h3 className='ready' id='ready'>
                    Готово
                </h3>
                <label htmlFor='ready'>{done}</label>
            </HeaderInner>
        </HeaderWrapper>
    );
}
