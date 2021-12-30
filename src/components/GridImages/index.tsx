import Image from "next/image";

import ThinkingImage from "../../assets/thinking.jpeg"
import AnalyticsImage from "../../assets/analytics.jpeg"
import NumbersImage from "../../assets/numbers.jpeg"
import ClockImage from "../../assets/clock.jpeg"

import styles from "./styles.module.scss";

export function GridImages() {
  return (
    <ul className={styles.container} id="grid">
      <li>
        <Image src={ThinkingImage} alt="Image of a person thinking" objectFit="cover" />
        <p>Tenha seu SEO <span>aprimorado</span></p>
      </li>
      <li>
        <Image src={AnalyticsImage} alt="Analytics Image" objectFit="cover" />
        <p>Integrações ao <span>Analytics do Google</span> e outros motores de busca</p>
      </li>
      <li>
        <Image src={NumbersImage} alt="Numbers Image" objectFit="cover" />
        <p>Veja o número de acessos ao seu espaço físico e online <span>decolarem</span></p>
      </li>
      <li>
        <Image src={ClockImage} alt="Clock Image" objectFit="cover" />
        <p>Controle em <span>tempo real</span></p>
      </li>
    </ul>
  )
}