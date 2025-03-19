'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Interface para o tipo de card do carrossel
interface CarouselCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export default function CarouselSection() {
  // Dados do carrossel
  const carouselData: CarouselCard[] = [
    {
      id: 1,
      icon: '/img/BILHETE.png',
      title: 'Bilhete',
      description: 'Facilitar o processo de compra de bilhetes, oferecendo uma experiência mais ágil e intuitiva para o usuário, além de fornecer um direcionamento claro e eficiente para o site ou aplicativo oficial do TOP.'
    },
    {
      id: 2,
      icon: '/img/ROTAS.png',
      title: 'Rotas',
      description: 'Fornecer informações sobre rotas, horários e intervalos, além de atualizações sobre atrasos, manutenções, obras e greves, garantindo que os usuários possam planejar seus deslocamentos com eficiência.'
    },
    {
      id: 3,
      icon: '/img/ACESSIBILIDADE.png',
      title: 'Acessibilidade',
      description: 'Promover a acessibilidade no transporte, oferecendo orientações detalhadas para usuários com deficiência, incluindo informações sobre rampas de acesso, elevadores, assentos preferenciais e demais recursos de inclusão.'
    },
    {
      id: 4,
      icon: '/img/DENUNCIA.png',
      title: 'Denúncia',
      description: 'Oferecer suporte inicial em casos de denúncias, incluindo formulários para reportar furtos, perdas ou abusos, com coleta de informações principais sobre o ocorrido.'
    }
  ];

  // Estado para controlar o card ativo
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Função para ir para o próximo card
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  // Função para ir para o card anterior
  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => 
      (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <section className="carousel-section">
      <div className="content-left">
        <h2>Fique por dentro</h2>
        <p>
          "O Trip é um chatbot inteligente que facilita sua vida no transporte ferroviário. 
          Confira abaixo tudo o que ele pode fazer por você!"
        </p>

        <div className="carousel-controls">
          <button className="carousel-button prev-button" onClick={prevCard}>
            <Image 
              src="/img/BOTAO-ESQUERDO.png" 
              alt="Anterior" 
              width={20} 
              height={20} 
            />
          </button>
          <button className="carousel-button next-button" onClick={nextCard}>
            <Image 
              src="/img/BOTAO-DIREITO.png" 
              alt="Próximo" 
              width={20} 
              height={20} 
            />
          </button>
        </div>
      </div>

      <div className="carousel-container">
        {carouselData.map((card, index) => (
          <div
            key={card.id}
            className={`carousel-card ${index === currentCardIndex ? 'active' : ''}`}
          >
            <div className="carousel-card-header">
              <Image
                src={card.icon}
                alt={`Ícone de ${card.title}`}
                className="card-icon"
                width={60}
                height={60}
              />
              <h3 className="card-title">{card.title}</h3>
            </div>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
