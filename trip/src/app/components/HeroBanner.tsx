import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-image">
          <Image
            src="/img/BANNER.png"
            alt="TRIP Banner"
            width={1200}
            height={600}
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}