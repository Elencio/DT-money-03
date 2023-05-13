import { useContext } from "react";
import { SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { TransactionContext } from "../../contexts/TransactionsContexts";

export function Summary(){

  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce
  (( acc, transaction) => {
    
    if(transaction.type === 'income'){
      acc.income += transaction.price;
      acc.total +=transaction.price;
    }else {
      acc.outcome += transaction.price;
      acc.total -= transaction.price;
    }

    return acc;
  }, 
  {
    income: 0,
    outcome: 0,
    total: 0,
  })

  return (
    <SummaryContainer>
        <SummaryCard>
          <header>
              <span>Entradas</span>
              <ArrowCircleUp size={32} color='#00b37e' />
          </header>

          <strong>R$ {summary.income}</strong>
        </SummaryCard>
        <SummaryCard>
          <header>
              <span>Saidas</span>
              <ArrowCircleDown size={32} color='#f75a68' />
          </header>

          <strong>R$ {summary.outcome}</strong>
        </SummaryCard>
        <SummaryCard variant="green">
          <header>
              <span>Total</span>
              <CurrencyDollar size={32} color='#fff' />
          </header>
          <strong>R$ {summary.total}</strong>
        </SummaryCard>
    </SummaryContainer>
  )
}