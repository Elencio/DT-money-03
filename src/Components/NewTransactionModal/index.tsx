
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, Title, TransactionType, TransactionTypeButton } from './styles';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

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
              <TransactionTypeButton variant='income' value='income'>
                 <ArrowCircleUp size={24} />

                 Entrada
              </TransactionTypeButton>
              <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />

                Saida
              </TransactionTypeButton>
                
             </TransactionType>

             <button type="submit">Cadastrar</button>
          </form>

       
      </Content>
   </Dialog.Portal>
     )
}