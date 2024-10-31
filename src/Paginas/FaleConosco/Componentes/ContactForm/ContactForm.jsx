import './ContactForm.css'
import React, { useRef, useEffect } from 'react';

function ContactForm(){

    const telRef = useRef(null);

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


    return (
        <div>
            <section className="form-container">
                <form className="contactform-form">
                    <div className="contactform-data-container">
                    <input type="text" id="nome" placeholder='Nome completo' className='contactform-input' required />
                    </div>

                    <div className="contactform-data-container">
                    <input type="email" id="nome" placeholder='E-mail' className='contactform-input-two' required />
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