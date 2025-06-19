import styles from "./page.module.css";
import invariant from "tiny-invariant";
import { createUser } from "./actions/createUser";
import { listUsers } from "./actions/listUsers";

export default async function Home() {
  invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");

  await createUser();
  const users = await listUsers();

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
