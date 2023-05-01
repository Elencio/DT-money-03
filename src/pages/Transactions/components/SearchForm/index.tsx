import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styled";

export function SearchForm(){
  return (
     <SearchFormContainer>
        <input type="text"  placeholder="Busque por transacoes"/>

        <button type="submit">
          <MagnifyingGlass />
          Buscar
        </button>
     </SearchFormContainer>
  )
}