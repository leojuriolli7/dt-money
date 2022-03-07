import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Mesmo que: 1fr 1fr 1fr
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; // Para o margin-top funcionar.
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.green {
      background: var(--green);
      color: #fff;
    }

    &.red {
      background: var(--red);
      color: #fff;
    }

    &.grey {
      background: var(--text-body);
      color: #fff;
    }
  }
`;
