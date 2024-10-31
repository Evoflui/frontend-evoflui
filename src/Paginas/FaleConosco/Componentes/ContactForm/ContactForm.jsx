import './ContactForm.css'
import React, { useRef, useEffect } from 'react';

function ContactForm(){

    const telRef = useRef(null);
    const nomeRef = useRef(null);
    const emailRef = useRef(null);


    useEffect(() => {
        const formatTel = (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1)$2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        };

        telRef.current.addEventListener('input', formatTel);
        return () => telRef.current.removeEventListener('input', formatTel);
    }, []);

    const formatName = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '');
    };
    

    return (
        <div>
            <section className="form-container">
                <form className="contactform-form">
                    <div className="contactform-data-container">
                    <input type="text" id="nome" placeholder='Nome completo' className='contactform-input' ref={nomeRef} required onInput={formatName} />
                    </div>

                    <div className="contactform-data-container">
                    <input type="email" id="nome" placeholder='E-mail' className='contactform-input-two' ref={emailRef} required/>
                    <input type="text" id="nome" placeholder='Telefone' className='contactform-input-two' ref={telRef} maxLength="14" minLength="14" required />
                    </div>

                    <div className="contactform-data-container">
                    <input type="text" id="assunto" placeholder='Assunto' className='contactform-input' required />
                    </div>

                    <div className="contactform-data-container">
                    <textarea type="text" id="mensagem" placeholder='Mensagem' className='contactform-message-input' required />
                    </div>

                    <input type="submit" value="Enviar" className='contactform-submit'/>
                </form>
            </section>
        </div>
    )
}

export default ContactForm;