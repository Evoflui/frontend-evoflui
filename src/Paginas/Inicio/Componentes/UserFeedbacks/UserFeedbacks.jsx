import './UserFeedbacks.css';
import React from 'react';
import Person1 from '../../../../assets/imagens/personFeedback1.svg';
import Person2 from '../../../../assets/imagens/personFeedback2.svg';
import Person3 from '../../../../assets/imagens/personFeedback3.svg';
import Person4 from '../../../../assets/imagens/personFeedback4.svg';
import Person5 from '../../../../assets/imagens/personFeedback5.svg';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

register();

function UserFeedbacks() {
    const data = [
        {
            id: '1',
            imagem: Person1,
            descricao: 'Imagem de uma mulher negra com coroa de flores',
            nome: 'Alissa Varela',
            depoimento: 'A trilha de conscientização para tutores é realmente excelente. Os recursos fornecidos ajudam muito a entender as necessidades dessas pessoas.'
        },
        {
            id: '2',
            imagem: Person2,
            descricao: 'Imagem de uma mulher negra com um chapéu de praia branco',
            nome: 'Marina Fiori',
            depoimento: 'O evento sobre o autismo que eu tive a oportunidade de participar foi extremamente informativo e muito bem organizado pelas pessoas.'
        },
        {
            id: '3',
            imagem: Person3,
            descricao: 'Imagem de um homem branco usando óculos',
            nome: 'Dante Ferraz',
            depoimento: 'A plataforma foi fundamental para o desenvolvimento social e cognitivo do João, meu filho que possui TEA. As trilhas realmente fazem a diferença no nosso dia a dia.'
        },
        {
            id: '4',
            imagem: Person4,
            descricao: 'Imagem de um homem branco usando óculos',
            nome: 'Lucas Andrade',
            depoimento: 'Os conteúdos oferecidos pela plataforma são enriquecedores e contribuem muito para nosso aprendizado! As trilhas são muito bem planejadas.'
        },
        {
            id: '5',
            imagem: Person5,
            descricao: 'Imagem de uma mulher negra utilizando uma regata branca',
            nome: 'Isabela Duarte',
            depoimento: 'A jornada de aprendizado na plataforma realmente superou minhas expectativas de várias maneiras. A comunidade de tutores é incrivelmente acolhedora.'
        }
    ];

    // Ajuste de altura dos containers
    var userContainers = document.querySelectorAll('.user-container');
    function setEqualHeight() {
        let maxHeight = 0;
    
        userContainers.forEach(container => {
            container.style.height = 'auto'; 
            maxHeight = Math.max(maxHeight, container.offsetHeight);
        });
    
        userContainers.forEach(container => {
            container.style.height = `${maxHeight}px`; 
        });
    }
    
    window.onload = setEqualHeight;
    window.onresize = setEqualHeight; 

    return (
        <div>
            <h1 className='section-title'>Nossas últimas avaliações</h1>
            <main className="user-feebacks-section">
                <Swiper
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000, 
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-navigation-color": "#FFF",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='user-container'>
                                <img src={item.imagem} alt={item.descricao} />
                                <h1 className='user-name'>{item.nome}</h1>
                                <p className='user-text'>{item.depoimento}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </div>
    );
}

export default UserFeedbacks;
