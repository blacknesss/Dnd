import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 24px;
    border-radius: 12px;
    min-width: 320px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid red;
    border-radius: 9999px;
    &:focus{
        outline: none;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    & button{
        padding: 6px;
        border: 1px solid #000;
        border-radius: 9999px;
        cursor: pointer;
    }
    & button:hover{
        background-color: #ff1c;
    }
`;

interface IAgrs {
    isPatch: boolean;
    setIsPatch: (arg: boolean) => void;
    children: React.ReactNode;
}

export default function ModalPatch({ setIsPatch, isPatch, children }: IAgrs) {
    return (
        isPatch && (
            <ModalOverlay onClick={() => setIsPatch(false)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
            </ModalOverlay>
        )
    );
}
