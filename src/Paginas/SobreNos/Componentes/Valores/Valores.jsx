import React from 'react';
import './Valores.css';
import LinhaMissao from '../../../../assets/imagens/linha-missao.svg';
import LinhaVisao from '../../../../assets/imagens/linha-visao.svg';

function Valores() {
    return (
        <div className='container-valores'>
            <div className='texto-missao'>
                <p> Nossa Missão </p>
                <img src={LinhaMissao} alt="Linha Azul" />
            </div>
            <div className='descricao'>
                <p> Nossa missão é promover o desenvolvimento contínuo e a inclusão de pessoas com TEA e seus tutores, proporcionando uma trilha
                    personalizada de aprendizado, apoio comunitário e acesso a eventos e conteúdos relevantes, para que todos possam evoluir em um
                    ambiente acolhedor e colaborativo.</p>
            </div>

            <div className='texto-missao'>
            <img src={LinhaVisao} alt="Linha Roxa" />
            <p style={{ color: '#4B1E8F' }}>Nossa Visão</p>

            </div>

            <div className='descricao-visao'>
                <p> Queremos ser referência no apoio ao desenvolvimento de pessoas neurodivergentes e seus tutores, criando uma plataforma
                    inovadora e acessível que conecte a comunidade, compartilhe conhecimentos e fortaleça a inclusão social e o empoderamento de
                    cada pessoa que possui essa neurodivergência.</p>
            </div>
            <div className='texto-missao'>
                <p> Nossos Valores </p>
                <img src={LinhaMissao} alt="Linha Azul" />
            </div>

            <div className='descricao'>
                <p> Acreditamos na força da inclusão, da empatia e da inovação para transformar vidas. Nosso compromisso é criar um ambiente
                    colaborativo onde cada indivíduo tenha a oportunidade de crescer e evoluir. Valorizamos o respeito às diferenças e acreditamos
                    que, juntos, podemos construir um futuro mais justo e acessível para todos</p>
            </div>

        </div>
    )
}

export default Valores;