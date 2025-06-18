import styles from "./page.module.css";

export default async function Home() {
  console.log(process.env);

  return (
    <div className={styles.page}>
      <main className={styles.main}>Hello</main>
    </div>
  );
}
