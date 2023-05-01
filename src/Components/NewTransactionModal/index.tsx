
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, Title, TransactionType } from './styles';
import { X } from 'phosphor-react';

export function NewTransactionModal(){
     return (
      <Dialog.Portal>
      <Overlay/>

      <Content>
          <Title>Nova Transacao</Title>

          <CloseButton>
            < X size={24}/>
          </CloseButton>

          <form action=""> 
             <input type="text" placeholder='Descricao' required />
             <input type="number" placeholder='Preco' required />
             <input type="text" placeholder='Categoria' required />
            

             <TransactionType>
                
             </TransactionType>

             <button type="submit">Cadastrar</button>
          </form>

       
      </Content>
   </Dialog.Portal>
     )
}