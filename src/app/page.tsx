import styles from "./page.module.css";
import invariant from "tiny-invariant";
import { createUser } from "./actions/createUser";
import { listUsers } from "./actions/listUsers";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");

  try {
    await createUser(1, "Alice");
    await createUser(2, "Bob");
  } catch (e) {
    console.log(e);
  }
  let users: unknown[] = [];
  try {
    users = await listUsers();
  } catch (e) {
    console.error(e);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        From env: {process.env.FROM_ENV}
        <br />
        VERCEL_GIT_COMMIT_REF: {process.env.VERCEL_GIT_COMMIT_REF}
        <br />
        Platform: {process.env.PLATFORM}
        <br />
        DATABASE_URL: {process.env.DATABASE_URL?.substring(0, 20)}...
        <br />
        Users length: {users.length}
        <br />
        Users: {JSON.stringify(users, null, 2)}
      </main>
    </div>
  );
}
