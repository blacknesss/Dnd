import { HeaderInner, HeaderWrapper } from "../../styles/header";


export default function Header() {
  return (
    <HeaderWrapper>
        <HeaderInner>
            <h3 className="loading" id="loading">Интервью</h3>
            <label htmlFor="loading">0</label>
        </HeaderInner>
        <HeaderInner>
            <h3 className="working" id="working">В работе</h3>
            <label htmlFor="working">0</label>  
        </HeaderInner>
        <HeaderInner>
            <h3 className="ready" id="ready">Готово</h3>
            <label htmlFor="ready">0</label>  
        </HeaderInner>
    </HeaderWrapper>
  )
}
