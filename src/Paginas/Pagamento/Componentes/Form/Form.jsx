import './Form.css'
import PaymentImage from '../../../../assets/imagens/paymentImage.svg'
import CardIcon from '../../../../assets/icones/cardIcon.svg'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Form() {

    const [startDate, setStartDate] = useState(new Date());


    return (
        <div>
            <section className='payment-container'>
                <img src={PaymentImage} alt="Ilustração de um moço e uma moça encima de uma plataforma que ilustra duas peças de um quebra-cabeça se cumprimentando" />

                <form action="." className="payment-form">
                    <label className='label-form'>Selecione o tipo de cartão</label>
                    <div className="card-options-container">
                        <div className='card-option'>
                            <input type="radio" name="opcao" id="credito" value="credito" required />
                            <label className='card-label'><img src={CardIcon} alt="ícone de um cartão" />Crédito</label>
                        </div>

                        <div className='card-option'>
                            <input type="radio" name="opcao" id="debito" value="debito" required/>
                            <label className='card-label'><img src={CardIcon} alt="ícone de um cartão" />Débito</label>
                        </div>
                    </div>

                    <div class="data-container">
                        <label className='label-form'>E-mail</label>
                        <input type="email" id="email" placeholder='Digite o seu e-mail cadastrado no Evoflui' className='data-input' required />
                    </div>

                    <div class="data-container">
                        <label className='label-form'>Nome</label>
                        <input type="text" id="nome" placeholder='Digite como consta no cartão' className='data-input' required />
                    </div>

                    <div class="data-container">
                        <label className='label-form'>CPF</label>
                        <input type="text" id="cpf" placeholder='XXX.XXX.XXX-XX' className='data-input' required/>
                    </div>

                    <div class="data-container">
                        <label className='label-form'>Número do cartão</label>
                        <input type="text" id="numCartao" placeholder='XXXX - XXXX - XXXX - XXXX' className='data-input' required/>
                    </div>

                    <div class="final-data-container">
                        <div className='final-data-element'>
                        <label className='label-form'>CVV</label>
                        <input type="text" id="cvv" placeholder='XXX' className='final-data-input' required/>
                        </div>

                        <div className='final-data-element'>
                        <label className='label-form'>Data de Vencimento</label>
                        <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className='final-data-input'
                    placeholderText='DD-MM-AAAA'
                    required
                />
                        </div>
                    </div>

                    <input type="submit" id="submit" value="Efetuar pagamento" className='submit-input-form'/>
                </form>
            </section>
        </div>
    )
}

export default Form;