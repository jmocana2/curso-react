import Link from 'next/link'

const Header = () => {
  return ( 
    <header>
      <div className="contenedor">
        <div><h1>Aprendiendo Next</h1></div>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
      </div>
    </header>
   );
}
 
export default Header;