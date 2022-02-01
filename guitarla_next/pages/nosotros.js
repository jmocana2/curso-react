import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout pagina="Sobre nosotros">      
      <main className="contenedor">
        <h2 className="heading">Sobre nosotros</h2>
        <div className="nosotros-image">
          <Image  layout="responsive" src="/img/nosotros.jpg" width={600} height={450} alt="sobre nosotros" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit ipsum at ante fringilla molestie. Phasellus faucibus sed metus nec ullamcorper. Maecenas orci lacus, scelerisque eget tortor et, faucibus dapibus elit. Nullam eu neque ac velit luctus semper in ac diam. Nullam dapibus purus ac imperdiet auctor. Etiam a massa sem. Mauris bibendum pharetra tincidunt. Duis egestas facilisis ex, ullamcorper fringilla est lacinia nec. Proin in tellus id sapien luctus consectetur. Donec in nisi et risus porta tincidunt sed a dui</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit ipsum at ante fringilla molestie. Phasellus faucibus sed metus nec ullamcorper. Maecenas orci lacus, scelerisque eget tortor et, faucibus dapibus elit. Nullam eu neque ac velit luctus semper in ac diam. Nullam dapibus purus ac imperdiet auctor. Etiam a massa sem. Mauris bibendum pharetra tincidunt. Duis egestas facilisis ex, ullamcorper fringilla est lacinia nec. Proin in tellus id sapien luctus consectetur. Donec in nisi et risus porta tincidunt sed a dui</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit ipsum at ante fringilla molestie. Phasellus faucibus sed metus nec ullamcorper. Maecenas orci lacus, scelerisque eget tortor et, faucibus dapibus elit. Nullam eu neque ac velit luctus semper in ac diam. Nullam dapibus purus ac imperdiet auctor. Etiam a massa sem. Mauris bibendum pharetra tincidunt. Duis egestas facilisis ex, ullamcorper fringilla est lacinia nec. Proin in tellus id sapien luctus consectetur. Donec in nisi et risus porta tincidunt sed a dui</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit ipsum at ante fringilla molestie. Phasellus faucibus sed metus nec ullamcorper. Maecenas orci lacus, scelerisque eget tortor et, faucibus dapibus elit. Nullam eu neque ac velit luctus semper in ac diam. Nullam dapibus purus ac imperdiet auctor. Etiam a massa sem. Mauris bibendum pharetra tincidunt. Duis egestas facilisis ex, ullamcorper fringilla est lacinia nec. Proin in tellus id sapien luctus consectetur. Donec in nisi et risus porta tincidunt sed a dui</p>
        
      </main>
    </Layout>
  )
}