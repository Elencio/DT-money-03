import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable  } from "./styles";


export function Transactions(){
  return (
    <div>
     <Header/>
     <Summary />


    <TransactionsContainer>
      <SearchForm />

      <TransactionsTable >
       <tbody>
          <tr>
             <td width='50%'>Desenvolvimento de Sites</td>
             <td width='50%'>
              <PriceHighLight variant="income">
                  R$ 12.0000,00
              </PriceHighLight>
             </td>
             <td width='50%'>Venda</td>
             <td width='50%'>13/04/2022</td>
          </tr>
          <tr>
             <td width='50%'>Hamburger</td>
             <td width='50%'>
              <PriceHighLight variant="outcome">
                 - R$ 59,00 
              </PriceHighLight>
             </td>
             <td width='50%'>Alimentacao</td>
             <td width='50%'>10/04/2022</td>
          </tr>
          <tr>
             <td width='50%'>Desenvolvimento de Sites</td>
             <td width='50%'>
             
             <PriceHighLight variant="outcome">
                  R$ 12.0000,00
              </PriceHighLight>
             </td>
             <td width='50%'>Venda</td>
             <td width='50%'>13/04/2022</td>
          </tr>
          <tr>
             <td width='50%'>Desenvolvimento de Sites</td>
             <td width='50%'>
             <PriceHighLight variant="income">
                  R$ 12.0000,00
              </PriceHighLight>
             </td>
             <td width='50%'>Venda</td>
             <td width='50%'>13/04/2022</td>
          </tr>
          <tr>
             <td width='50%'>Desenvolvimento de Sites</td>
             <td width='50%'>
              <PriceHighLight variant="outcome">
                  R$ 12.0000,00
              </PriceHighLight>
             </td>
             <td width='50%'>Venda</td>
             <td width='50%'>13/04/2022</td>
          </tr>
       </tbody>
     </TransactionsTable >
    </TransactionsContainer>
    </div>
  )
}