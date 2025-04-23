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
`;

export const ButtonRow = styled.div`
    display: flex;
    gap: 8px;
`;

interface IAgrs {
    isActive: boolean;
    setIsActive: (arg: boolean) => void;
    children: React.ReactNode;
}

export default function ModalChange({ setIsActive, isActive, children }: IAgrs) {
    return (
        isActive && (
            <ModalOverlay onClick={() => setIsActive(false)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
            </ModalOverlay>
        )
    );
}
