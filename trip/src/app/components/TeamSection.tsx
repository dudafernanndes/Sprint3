import Image from 'next/image';
import Link from 'next/link';

// Interface para o tipo de membro da equipe
interface TeamMember {
  id: number;
  name: string;
  surname: string;
  role: string;
  institution: string;
  image: string;
  github: string;
  linkedin: string;
}

export default function TeamSection() {
  // Dados dos membros da equipe
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Madjer Henrique',
      surname: 'Almeida Finamor',
      role: 'Análise e Desenvolvimento de Sistemas - FIAP',
      institution: '1TDSPB',
      image: '/img/MADJER.png',
      github: 'https://github.com/MadjerFin',
      linkedin: 'https://www.linkedin.com/in/madjer-finamor-51196117b/'
    },
    {
      id: 2,
      name: 'Maria Eduara',
      surname: 'Fernandes Rocha',
      role: 'Análise e Desenvolvimento de Sistemas - FIAP',
      institution: '1TDSPB',
      image: '/img/DUDA.png',
      github: 'https://github.com/dudafernanndes',
      linkedin: 'https://www.linkedin.com/in/maria-eduarda-fernandes-rocha-5350a2327'
    },
    {
      id: 3,
      name: 'Guilherme Santos',
      surname: 'Falcão',
      role: 'Análise e Desenvolvimento de Sistemas - FIAP',
      institution: '1TDSPB',
      image: '/img/GUI.png',
      github: 'https://github.com/gsfalcao',
      linkedin: 'https://www.linkedin.com/in/guilherme-santos-falc%C3%A3o-a87012328/'
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <div className="profile-image-container">
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="profile-image"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <h4 className="member-name">{member.surname}</h4>
              <p className="member-role">{member.role}</p>
              <p className="member-institution">{member.institution}</p>
              <div className="social-links">
                <Link href={member.github} className="social-icon github-icon">
                  <Image src="/img/GITHUB.svg" alt="GitHub" width={24} height={24} />
                </Link>
                <Link href={member.linkedin} className="social-icon linkedin-icon">
                  <Image src="/img/LINKEDIN.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}