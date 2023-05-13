import { useContext, useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable  } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContexts";


export function Transactions(){

  const { transactions } = useContext(TransactionContext)

  return (
    <div>
     <Header/>
     <Summary />


    <TransactionsContainer>
      <SearchForm />

      <TransactionsTable >
       <tbody>
         {
            transactions.map( transaction => {
               return (
                  <tr key={transaction.id}>
                  <td width='50%'>{transaction.descriptions}</td>
                  <td>
                   <PriceHighLight variant={transaction.type}>
                       {transaction.price}
                   </PriceHighLight>
                  </td>
                  <td >{transaction.category}</td>
                  <td >{transaction.createdAt}</td>
               </tr>
               )
            })
         }
       </tbody>
     </TransactionsTable >
    </TransactionsContainer>
    </div>
  )
}