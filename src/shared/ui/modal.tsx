import { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
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

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}

export function Modal({ isOpen, onClose, onSubmit }: ModalProps) {
  const [text, setText] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text.trim());
      setText("");
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Input
          autoFocus
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Введите текст задачи"
          onKeyDown={e => { if (e.key === "Enter") handleSubmit(); }}
        />
        <ButtonRow>
          <button onClick={handleSubmit}>Добавить</button>
          <button onClick={onClose}>Отмена</button>
        </ButtonRow>
      </ModalContent>
    </ModalOverlay>
  );
}