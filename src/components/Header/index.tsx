import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h2>HubLocal</h2>
      </div>
    </header>
  );
}