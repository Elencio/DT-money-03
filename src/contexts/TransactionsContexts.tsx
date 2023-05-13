import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface Transactions {
  id: number,
  descriptions: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string,
}

interface TransactionsContextType {
  transactions: Transactions[],
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionsContextType)


export  function TransactionProvider({ children }:TransactionsProviderProps ) {

     
  const [transactions, setTransactions] = useState<Transactions[]>([])


  async function loadtransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
   loadtransactions()
  }, [])




  return (
    <TransactionContext.Provider value={{ transactions }}>
           {children}
    </TransactionContext.Provider>
  )
}