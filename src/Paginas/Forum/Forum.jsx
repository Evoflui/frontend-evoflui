import { useState } from 'react';
import ToPostField from './Componentes/ToPostField/ToPostField';
import Header from '../../ComponentesGerais/HeaderInterno/HeaderInterno';
import Posts from './Componentes/Posts/Posts';
import Footer from '../../ComponentesGerais/Footer/Footer';

function Forum() {
    const [posts, setPosts] = useState([
        {
            title: 'Dicas para melhorar a comunicação com crianças autistas',
            author: 'João Oliveira',
            content: 'Olá pessoal, sou tutor do meu filho de 8 anos, diagnosticado com TEA, e estou buscando dicas para melhorar a nossa comunicação no dia a dia. Ele tem bastante dificuldade em expressar o que sente e às vezes fica frustrado quando não consigo entender o que ele quer. Gostaria de saber quais técnicas vocês usam para ajudar na comunicação com as crianças autistas.',
            qntdComentarios: 3,
            qntdCurtidas: 25,
            userCommentText: "Eu também sou mãe de uma criança com TEA e uma coisa que tem ajudado bastante é usar cartões de comunicação com imagens. Sempre que ela não consegue se expressar com palavras, ela aponta para o cartão e conseguimos entender o que ela precisa. Pode ser uma boa tentar por aí!",
            userCommentName: "Ana Rodriguez",
            userCommentText2: "Eu tento ser bem paciente e dar um tempo para meu filho pensar e se expressar. Às vezes, só de esperar ele ficar mais calmo já ajuda bastante. Também uso algumas estratégias como escolher momentos tranquilos para conversar, sem pressa, o que facilita a comunicação.",
            userCommentName2: "Ryan Pereira",
            userCommentText3: "Uma técnica que tem ajudado muito aqui em casa é o uso de histórias sociais. Criei algumas situações que ele pode vivenciar nas histórias e isso tem ajudado a explicar algumas emoções e comportamentos. Vale a pena tentar, parece que ele se sente mais seguro.",
            userCommentName3: "Larissa Santos"
        },
        {
            title: 'Como lidar com as crises sensoriais em lugares públicos?',
            author: 'Ana Martins',
            content: 'Meu sobrinho de 6 anos, que tem TEA, costuma ter crises sensoriais quando vamos a lugares públicos mais movimentados, como shoppings ou parques. Já tentei levá-lo em horários mais tranquilos, mas ainda assim ele fica muito agitado com os sons e as luzes. Vocês teriam sugestões de como preparar o ambiente ou acalmá-lo nesses momentos? Como vocês lidam com isso?',
            qntdComentarios: 2,
            qntdCurtidas: 14,
            userCommentText: "Eu também passei por isso com minha filha. O que tem ajudado bastante é levar fones de ouvido com abafadores de ruído. Ela fica muito mais calma quando consegue controlar os sons ao redor. Além disso, sempre levo brinquedos sensoriais para mantê-la ocupado.",
            userCommentName: "Carlos Silva",
            userCommentText2: "Um truque que uso é planejar as visitas em horários que o local esteja menos cheio, mesmo que isso não resolva 100%, ajuda bastante. Outra coisa que faço é trazer uma rotina de transição para ele, explicando o que vamos fazer e como será o ambiente. Isso ajuda a reduzir a ansiedade.",
            userCommentName2: "Fernanda Lima"
        },
    ]);

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]); 
    };

    return (
        <div>
            <Header />
            <ToPostField addPost={addPost} />
            <Posts posts={posts} />
            <Footer />
        </div>
    );
}

export default Forum;
