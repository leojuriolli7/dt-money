import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  const totalBackgroundColor = () => {
    if (summary.total > 0) {
      return "green";
    } else if (summary.total === 0) {
      return "grey";
    } else {
      return "red";
    }
  };

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={IncomeImg} alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className={totalBackgroundColor()}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
