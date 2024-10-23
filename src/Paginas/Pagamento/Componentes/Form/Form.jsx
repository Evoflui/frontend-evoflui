import './Form.css'
import PaymentImage from '../../../../assets/imagens/paymentImage.svg'
import CardIcon from '../../../../assets/icones/cardIcon.svg'

function Form() {
    return (
        <div>
            <section className='payment-container'>
                <img src={PaymentImage} alt="Ilustração de um moço e uma moça encima de uma plataforma que ilustra duas peças de um quebra-cabeça se cumprimentando" />

                <form action="." className="payment-form">
                    <label className='label-form'>Selecione o tipo de cartão</label>
                    <div className="card-options-container">
                        <div className='card-option'>
                            <input type="radio" name="opcao" id="feminino" value="F" />
                            <label className='card-label'><img src={CardIcon} alt="ícone de um cartão"/>Crédito</label>
                        </div>

                        <div className='card-option'>
                            <input type="radio" name="opcao" id="feminino" value="F" />
                            <label className='card-label'><img src={CardIcon} alt="ícone de um cartão"/>Débito</label>
                        </div>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Form;