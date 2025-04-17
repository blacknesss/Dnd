import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;

    & h3 {
        display: flex;
        padding: 4px 12px;
        color: rgb(11, 111, 98);
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        border-radius: 9999px;
    }
    & .loading {
        background: rgb(212, 247, 243);

        &:before {
            content: url(Vector.png);
            padding-right: 5px;
        }
    }
    & .working {
        background: rgb(247, 245, 212);

        &:before {
            content: url(lucide_notepad-text.png);
            padding-right: 5px;
        }
    }
    & .ready {
        background: rgb(212, 224, 247);

        &:before {
            content: url(lucide_notepad-text-2.png);
            padding-right: 5px;
        }
    }

    & label {
        color: rgb(105, 105, 105);
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
    }
`;
