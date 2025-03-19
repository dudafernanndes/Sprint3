import Image from 'next/image';
import Link from 'next/link';

export default function TelegramSection() {
  return (
    <section className="telegram-section">
      <div className="container">
        <div className="telegram-content">
          <div className="phone-image">
            <Image
              src="/img/CELULAR.png"
              alt="Celular com TRIP"
              width={400}
              height={600}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
          <div className="telegram-text">
            <h2>
              Converse com o <span className="highlight">TRIP</span> {' '}
            </h2>

            <p className="description">
              Agora que você já conheceu como o TRIP pode melhorar sua viagem, chegou a
              hora de conversar com ele!
            </p>

            <p className="instruction">
              Clique no botão abaixo e comece a usar o Trip agora mesmo!
            </p>

            <div className="cta-button">
              <Link href="#" className="btn btn-trip">
                FALE COM O TRIP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}