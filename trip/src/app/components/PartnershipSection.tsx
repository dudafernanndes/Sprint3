import Image from 'next/image';
import Link from 'next/link';

export default function PartnershipSection() {
  return (
    <div className="container">
      <section className="partnership-section">
        <div className="image-container">
          <Image
            src="/img/CCR.png"
            alt="Logo CCR"
            className="ccr-logo"
            width={500}
            height={300}
            style={{
              maxWidth: '90%',
              height: 'auto'
            }}
          />
        </div>
        <div className="content-container">
          <h2>Uma Parceria para Revolucionar o Transporte Ferroviário</h2>
          <p>
            Com a tecnologia do <span className="highlight">Trip</span> e a expertise da{' '}
            <span className="highlight">CCR</span>, os passageiros terão acesso a um atendimento mais ágil, 
            eficiente e seguro, garantindo uma jornada mais tranquila e informada. 
            Seja para esclarecer dúvidas, relatar problemas ou planejar sua viagem, 
            essa parceria reforça o compromisso de inovação no transporte ferroviário.
          </p>
          <Link href="https://www.grupoccr.com.br/" className="saiba-mais">
            Saiba mais
          </Link>
        </div>
      </section>
    </div>
  );
}