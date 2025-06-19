import postgres from "postgres";
import styles from "./page.module.css";
import invariant from "tiny-invariant";

export default async function Home() {
  invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");
  const sql = postgres(process.env.DATABASE_URL);
  console.log(process.env);

  await sql`insert into users (id, name) values (1, 'Alice from branch') on conflict do nothing`;
  const users = await sql`select * from users`;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello {process.env.FROM_ENV} / {process.env.VERCEL_GIT_COMMIT_REF} /{" "}
        {process.env.PLATFORM} {users.length}
        {JSON.stringify(users, null, 2)}
      </main>
    </div>
  );
}
