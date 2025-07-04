import styles from "./page.module.css";

export default async function Home() {
  console.log(process.env);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello {process.env.FROM_ENV} / {process.env.VERCEL_GIT_COMMIT_REF} /{" "}
        {process.env.PLATFORM}
      </main>
    </div>
  );
}
