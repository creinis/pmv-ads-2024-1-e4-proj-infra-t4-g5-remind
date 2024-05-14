
//PayAndContract.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import CreditCard from '../components/PaymentMethods/CreditCard';
import Amazon from '../components/PaymentMethods/Amazon';
import BankTransfer from '../components/PaymentMethods/BankTransfer';
import PayPall from '../components/PaymentMethods/PayPall';


const PayAndContract = ({
      selectedPlan, 
      userName, 
      email, 
      termsAccepted, 
      paymentInfo, 
      payPallEmail, 
      payPallPassword, 
      payPallTermsAccepted, 
      payPallPaymentInfo
    }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading] = useState(false);

  const handleButtonClick = () => {
    console.log('Método de pagamento:', paymentMethod);
    
    switch (paymentMethod) {
      case "Cartão de Crédito":
        console.log('Plano selecionado:', selectedPlan);
        console.log('Nome do usuário:', userName);
        console.log('Email:', email);
        console.log('Termos aceitos', termsAccepted);
        break;
        
      case "PayPall":
        console.log('Plano selecionado:', selectedPlan);
        console.log('Nome do usuário:', userName);
        console.log('Email:', email);
        console.log('Termos aceitos', termsAccepted);
        console.log('PayPall email:', payPallEmail );
        console.log('PayPall password:', payPallPassword );
        console.log('PayPall terms:', payPallTermsAccepted );
        break;
        
      case "Pague com Amazon":
        console.log('Plano selecionado:', selectedPlan);
        console.log('Nome do usuário:', userName);
        console.log('Email:', email);
        console.log('Termos aceitos', termsAccepted);
        break;
        
      case "Débito Automático":
        console.log('Plano selecionado:', selectedPlan);
        console.log('Nome do usuário:', userName);
        console.log('Email:', email);
        console.log('Termos aceitos', termsAccepted);
        console.log('Banco:', paymentInfo.bank);
        console.log('Conta:', paymentInfo.account);
        console.log('Dígito da conta:', paymentInfo.accountDigit);
        console.log('Agência:', paymentInfo.agency);
        console.log('CPF:', paymentInfo.cpf);
        console.log('Nome:', paymentInfo.name);
        break;
        
      default:
        console.log('Método de pagamento não reconhecido');
    }
  };
  

  let Component;
  if(paymentMethod === "Cartão de Crédito") {
    Component = <CreditCard 
                  onButtonClick={handleButtonClick} 
                  selectedPlan={selectedPlan} 
                  userName={userName} 
                  email={email} 
                  termsAccepted={termsAccepted} 
                  />
  } else if(paymentMethod === "PayPall") {
    Component = <PayPall 
                  onButtonClick={handleButtonClick} 
                  selectedPlan={selectedPlan} 
                  userName={userName} 
                  email={email} 
                  termsAccepted={termsAccepted} 
                  {...payPallPaymentInfo}
                  />
  } else if(paymentMethod === "Pague com Amazon") {
    Component = <Amazon 
                  onButtonClick={handleButtonClick} 
                  isLoading={isLoading} 
                  selectedPlan={selectedPlan} 
                  userName={userName} 
                  email={email} 
                  termsAccepted={termsAccepted} 
                  />
  } else if(paymentMethod === "Débito Automático") {
    Component = <BankTransfer 
                  isLoading={isLoading}
                  onButtonClick={handleButtonClick} 
                  selectedPlan={selectedPlan} 
                  userName={userName} 
                  email={email} 
                  termsAccepted={termsAccepted} 
                  {...paymentInfo}
                  />
  }
  
  return (
    <div className='buynow-cards-container'>
      <div className='buynow-card-grid-3'>
        <div className='buynow-card-border'> 
          <h3 className='buynow-card-title pb-10'>Produto Selecionado</h3>
          <h3 className='buynow-card-title'>{selectedPlan.title}</h3>
          {selectedPlan.mostPopular && (
            <p className='buynow-card-border-popular'>
              Mais Popular
            </p>
          )}
          <p className='mt-4 buynow-card-text-sm'> 
            {selectedPlan.description}
          </p>
          <div className='mt-4 buynow-card-inside-black'>
            <p className='buynow-card-sale'>
              <span>{selectedPlan.currency}</span>
              <span className='ml-3 text-4xl text-neutral-200'>${selectedPlan.price}</span>
              <span>{selectedPlan.frequency}</span>
            </p>
          </div>

          <ul className='buynow-card-ul mt-6'>
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className='buynow-card-text-sm'>
                * {feature}
              </li>
            ))}
          </ul>

        </div>
        
            <div className='relative buynow-card-border'>
                <form className='flex flex-col rounded-2xl bg-zinc text-neutral-100'>
                <div className='pb-6 flex flex-col items-center justify-center'>
                    <h2 className='buynow-card-title pb-6'>Pagamento</h2>
                        <div>
                            <p className='mt-4 buynow-card-text-sm'> 
                                <span className='font-semibold'>Selecione o metodo para pagamento. </span>
                                Siga as instruções ao lado para realizar o pagamento.
                            </p>
                        </div>
                </div>
                    <div className='mt-2 mb-12 space-y-4 flex-1' >
                    <label>
                        <input className='mx-2' type="radio" value="Cartão de Crédito" 
                        checked={paymentMethod === "Cartão de Crédito"} 
                        onChange={(e) => setPaymentMethod(e.target.value)} />
                        
                        Cartão de Crédito
                        <br/>
                    </label>
                    <label>
                        <input className='mx-2' type="radio" value="PayPall" 
                        checked={paymentMethod === "PayPall"} 
                        onChange={(e) => setPaymentMethod(e.target.value)} />
                        PayPall
                        <br/>
                    </label>
                    <label>
                        <input className='mx-2' type="radio" value="Pague com Amazon" 
                        checked={paymentMethod === "Pague com Amazon"} 
                        onChange={(e) => setPaymentMethod(e.target.value)} />
                        Pague com Amazon
                        <br/>
                    </label>
                    <label>
                        <input className='mx-2' type="radio" value="Débito Automático" 
                        checked={paymentMethod === "Débito Automático"} 
                        onChange={(e) => setPaymentMethod(e.target.value)} />
                        Débito Automático
                        <br/>
                    </label>
                    </div>

                </form>
                <div  className='text-white text-xs'>
                  <p className='text-white text-xs'>Nome do Usuário: {userName}</p>
                  <p className='text-white text-xs'>Email do Usuário: {email}</p>
                </div>
            </div>
            <div className=' -mx-4 buynow-card-border'> 
                <h3 className='buynow-card-title pb-6'>{paymentMethod}</h3>
                <div className="relative flex-center">
                    
                    {Component}
                    
                </div>
                <div >
                    </div>
                </div>
        </div>
    </div>
  );
};

PayAndContract.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    selectedPlan: PropTypes.object.isRequired,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    termsAccepted: PropTypes.bool.isRequired,
    paymentInfo: PropTypes.object,
    payPallEmail: PropTypes.string, 
    payPallPassword: PropTypes.string , 
    payPallTermsAccepted: PropTypes.bool,
    payPallPaymentInfo: PropTypes.object,
  };

export default PayAndContract;
