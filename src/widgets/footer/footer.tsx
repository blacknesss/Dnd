import { FooterWrapper, ProgContainer } from "../../styles/footer";


export default function Footer() {
  return (
    <FooterWrapper>
        <h3>{`20 %`}</h3>
        <p>выполненных задач</p>
        <ProgContainer className="prog-container">
            <div className="prog-bar" style={{width: '50%'}}></div>
        </ProgContainer>
    </FooterWrapper>
  )
}
