import { GridImages } from "../components/GridImages";
import { Header } from "../components/Header";

import LogoImg from "../assets/logo.png";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.content}>

          <section className={styles.main}>
            <h2>Deseja ter mais presente nos mapas e listas da Internet?</h2>
            <p>O sistema é focado na <span>maior visualização</span> da sua empresa, seja em mapas ou nos motores de busca da Internet, como <span>Google, Yahoo, Bing</span> etc.</p>
            <p>Não será mais necessário configurar <span>manualmente</span> as opções de analytics de cada plataforma, assim sobrará tempo para fazer o que realmente importa.</p>
            <Image src={LogoImg} alt="Logo da HubLocal" height={66} width={200} />

            <p>Ainda tem dúvidas do por quê de utilizar a plataforma? <span><a href="#grid">Confira</a></span></p>
            <GridImages />

          </section>
        </div>
      </main>
    </>
  )
}
