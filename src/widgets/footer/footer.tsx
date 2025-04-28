import { useAppSelector } from '../../features/board/model/hooks';
import { FooterWrapper, ProgContainer } from '../../styles/footer';

export default function Footer() {
    const done = useAppSelector((state) => state.done);
    const tasks = useAppSelector((state) => state.todos);
    let percent = Math.floor(done * 100 / tasks.length);
    return (
        <FooterWrapper>
            <h3>
                {percent}
            </h3>
            <p>выполненных задач</p>
            <ProgContainer className='prog-container'>
                <div className='prog-bar' style={{ width: `${percent}%` }}></div>
            </ProgContainer>
        </FooterWrapper>
    );
}
