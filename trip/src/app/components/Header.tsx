import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

type HeaderProps = {
  showHomeLink?: boolean;
  showChatLink?: boolean;
  showLoginLink?: boolean;
  showSignupLink?: boolean;
};

export default function Header({
  showHomeLink = true,
  showChatLink = true,
  showLoginLink = false,
  showSignupLink = true,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src="/img/TRIP-CABECA.svg" 
          alt="TRIP Logo" 
          width={30} 
          height={30} 
        />
        <span className={styles.logoText}>TRIP</span>
      </div>
      <div className={styles.headerActions}>
        {showHomeLink && (
          <Link href="/" className={`${styles.btn} ${styles.btnDownload}`}>
            HOME
          </Link>
        )}
        {showSignupLink && (
          <Link href="/cadastro" className={`${styles.btn} ${styles.btnDownload}`}>
            Criar conta
          </Link>
        )}
        {showLoginLink && (
          <Link href="/login" className={`${styles.btn} ${styles.btnDownload}`}>
            Entrar
          </Link>
        )}
        {showChatLink && (
          <Link href="/chat" className={`${styles.btn} ${styles.btnChat}`}>
            CHAT
          </Link>
        )}
      </div>
    </header>
  );
}