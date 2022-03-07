import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../assets/close.svg";
import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import { useTransactions } from "../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault(); // prevenir funcionamento padrão.

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)} // Toda vez que trocar o valor do input, salva o valor digitado.
          required
        />

        <input
          type="number"
          placeholder="Value"
          value={amount}
          min="1"
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Entrada" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
