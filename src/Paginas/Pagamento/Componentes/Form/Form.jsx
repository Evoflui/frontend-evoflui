import './Form.css';
import PaymentImage from '../../../../assets/imagens/paymentImage.svg';
import CardIcon from '../../../../assets/icones/cardIcon.svg';
import React, { useRef, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function Form() {

    const cpfRef = useRef(null);
    const numCardRef = useRef(null);
    const cvvRef = useRef(null);
    const dateRef = useRef(null);
    const nomeRef = useRef(null);

    useEffect(() => {
        const formatCPF = (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 3 && value.length <= 6) {
                value = value.replace(/(\d{3})(\d+)/, '$1.$2');
            } else if (value.length > 6 && value.length <= 9) {
                value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
            } else if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
            }
            e.target.value = value;
        };

        const cpfInput = cpfRef.current;
        cpfInput.addEventListener('input', formatCPF);

        return () => {
            cpfInput.removeEventListener('input', formatCPF);
        };
    }, []);

    const formatNumCard = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4 && value.length <= 8) {
            value = value.replace(/(\d{4})(\d+)/, '$1 $2');
        } else if (value.length > 8 && value.length <= 12) {
            value = value.replace(/(\d{4})(\d{4})(\d+)/, '$1 $2 $3');
        } else if (value.length > 12) {
            value = value.replace(/(\d{4})(\d{4})(\d{4})(\d+)/, '$1 $2 $3 $4');
        }
        e.target.value = value;
    };

    const formatName = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    };

    const onlyNumbers = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    };

    const formatDate = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.replace(/(\d{2})(\d+)/, '$1/$2'); 
        }
        e.target.value = value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Pagamento efetuado!",
            text: "Agradecemos a sua assinatura. Não se esqueça de verificar o seu e-mail para futuras atualizações.",
            icon: "success"
        }).then(() => {
            e.target.reset(); 
        });

    };

    return (
        <div>
            <section className='payment-container'>
                <img src={PaymentImage} alt="Ilustração de um moço e uma moça encima de uma plataforma que ilustra duas peças de um quebra-cabeça se cumprimentando" />

                <form action="." className="payment-form" onSubmit={handleSubmit}>
                    <label className='label-form'>Selecione o tipo de cartão</label>
                    <div className="card-options-container">
                        <div className='card-option'>
                            <input type="radio" name="opcao" id="credito" value="credito" required />
                            <label className='card-label'><img src={CardIcon} alt="ícone de um cartão" />Crédito</label>
                        </div>

                        <div className='card-option'>
                            <input type="radio" name="opcao" id="debito" value="debito" required />
                            <label className='card-label'><img src={CardIcon} alt="ícone de um cartão" />Débito</label>
                        </div>
                    </div>

                    <div className="data-container">
                        <label className='label-form'>E-mail</label>
                        <input type="email" id="email" placeholder='Digite o seu e-mail cadastrado no Evoflui' className='data-input' required />
                    </div>

                    <div className="data-container">
                        <label className='label-form'>Nome</label>
                        <input type="text" id="nome" placeholder='Digite como consta no cartão' className='data-input' ref={nomeRef} onInput={formatName} required />
                    </div>

                    <div className="data-container">
                        <label className='label-form'>CPF</label>
                        <input type="text" id="cpf-input" placeholder='XXX.XXX.XXX-XX' className='data-input' ref={cpfRef} maxLength="14" minLength="14" required />
                    </div>

                    <div className="data-container">
                        <label className='label-form'>Número do cartão</label>
                        <input type="text" id="numCartao" placeholder='XXXX XXXX XXXX XXXX' className='data-input' ref={numCardRef} maxLength="19" minLength="19" onInput={formatNumCard} required />
                    </div>

                    <div className="final-data-container">
                        <div className='final-data-element'>
                            <label className='label-form'>CVV</label>
                            <input type="text" id="cvv" placeholder='XXX' className='final-data-input' maxLength="3" minLength="3" ref={cvvRef} onInput={onlyNumbers} required />
                        </div>

                        <div className='final-data-element'>
                            <label className='label-form'>Data de Vencimento</label>
                            <input 
                                type="text" 
                                id="DateInput" 
                                placeholder='MM/AA' 
                                className='final-data-input' 
                                maxLength="5" 
                                onInput={formatDate} 
                                required
                                ref={dateRef}
                            />
                        </div>
                    </div>

                    <input type="submit" id="submit" value="Efetuar pagamento" className='submit-input-form' />
                </form>
            </section>
        </div>
    );
}

export default Form;