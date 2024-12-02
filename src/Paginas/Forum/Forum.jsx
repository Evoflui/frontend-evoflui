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
            qntdComentarios: 8,
            qntdCurtidas: 45,
        },
        {
            title: 'Como lidar com as crises sensoriais em lugares públicos?',
            author: 'Ana Martins',
            content: 'Meu sobrinho de 6 anos, que tem TEA, costuma ter crises sensoriais quando vamos a lugares públicos mais movimentados, como shoppings ou parques. Já tentei levá-lo em horários mais tranquilos, mas ainda assim ele fica muito agitado com os sons e as luzes. Vocês teriam sugestões de como preparar o ambiente ou acalmá-lo nesses momentos? Como vocês lidam com isso?',
            qntdComentarios: 2,
            qntdCurtidas: 10,
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
