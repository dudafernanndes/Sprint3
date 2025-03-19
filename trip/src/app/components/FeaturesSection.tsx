import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="features-section">
      {/* Mensagens à esquerda */}
      <div className="message message-left message-1">
        Perdi minha carteira
        <div className="avatar avatar-left">
          <Image src="/img/USUÁRIO.png" alt="Usuário" width={40} height={40} />
        </div>
      </div>

      <div className="message message-left message-5">
        電車は遅れていますか?
        <div className="avatar avatar-left">
          <Image src="/img/USUÁRIO.png" alt="Usuário" width={40} height={40} />
        </div>
      </div>

      {/* Mensagens à direita */}
      <div className="message message-right message-2">
        Holla!!
        <div className="avatar avatar-right">
          <Image src="/img/USUÁRIO.png" alt="Usuário" width={40} height={40} />
        </div>
      </div>

      <div className="message message-right message-3">
        J'ai été volé
        <div className="avatar avatar-right">
          <Image src="/img/USUÁRIO.png" alt="Usuário" width={40} height={40} />
        </div>
      </div>

      <div className="message message-right message-4">
        Obrigada pela ajuda!
        <div className="avatar avatar-right">
          <Image src="/img/USUÁRIO.png" alt="Usuário" width={40} height={40} />
        </div>
      </div>

      <div className="message message-right message-6">
        Quiero ir a la linea 9
        <div className="avatar avatar-right">
          <Image src="/img/USUÁRIO.png" alt="Usuário" width={40} height={40} />
        </div>
      </div>

      {/* Texto principal */}
      <div className="features-text">
        <h1>
          O Trip é um assistente virtual inteligente que facilita sua vida no transporte ferroviário. 
          Confira algumas das funcionalidades que ele oferece:
        </h1>
      </div>
    </section>
  );
}