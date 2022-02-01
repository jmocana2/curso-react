import Link from 'next/link'
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return ( 
    <footer className={styles.footer}>
      <nav className={styles.navegacion}>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/tienda">Tienda</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
   );
}
 
export default Footer;