import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    column-gap: 30px;
    padding-bottom: 20px;
    align-items: center;

    h3 {
        color: rgb(83, 123, 243);
        font-family: Inter;
        font-size: 16px;
        font-weight: 700;
    }
    p {
        font-family: Inter;
        font-size: 16px;
    }
`;

export const ProgContainer = styled.div`
    flex-grow: 1;
    height: 15px;
    border-radius: 9999px;
    background: rgb(231, 232, 234);
    overflow: hidden;

    & .prog-bar {
        height: 100%;
        border-radius: 9999px;
        background: rgb(83, 123, 243);
    }
`;
