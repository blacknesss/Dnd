import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    column-gap: 16px;

    & .left {
        border-radius: 20px;
        background: rgb(245, 250, 249);
        padding: 12px;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        flex-basis: 33%;
    }
    .task-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    & .middle {
        border-radius: 20px;
        background: rgb(250, 250, 245);
        padding: 12px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 12;
        flex-basis: 33%;
    }
    & .right {
        border-radius: 20px;
        background: rgb(245, 247, 250);
        padding: 12px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 12;
        flex-basis: 33%;
    }
`;

export const Task = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    padding: 16px;
    border: 1px solid rgb(187, 221, 214);
    border-radius: 16px;

    & div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & img {
            display: block;
            cursor: pointer;
        }
        & h2 {
            display: flex;
        }
        & h2:before {
            content: url(done.png);
            padding-right: 5px;
        }
    }
    & .name {
        display: flex;
        align-items: center;
        column-gap: 5px;
    }
    & .name:before {
        content: 'Д';
        padding: 2px 4px;
        font-size: 14px;
        border-radius: 9999px;
        border: 0.5px solid;
        background-color: #d4f7f3;
    }
    & .loading {
        padding: 4px 12px;
        color: rgb(11, 111, 98);
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        border-radius: 9999px;
        background: rgb(212, 247, 243);
        width: max-content;
    }
    & .add-author {
        display: flex;
        cursor: pointer;
    }
    & .add-author:before {
        content: url(lucide_user.png);
        padding: 0px 5px 0 0;
    }
`;

export const AddTask = styled.div`
    display: flex;
    column-gap: 9px;
    border: 1px solid rgb(11, 111, 98);
    border-radius: 12px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    color: rgb(11, 111, 98);
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
`;
