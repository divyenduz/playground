import styles from "./page.module.css";
// import invariant from "tiny-invariant";
import { createUser } from "./actions/createUser";
import { listUsers } from "./actions/listUsers";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  // invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");

  console.log(process.env);
  console.log(process.env.DATABASE_URL);

  await createUser();
  const users = await listUsers();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello {process.env.FROM_ENV} / {process.env.VERCEL_GIT_COMMIT_REF} /{" "}
        {process.env.PLATFORM} {users.length}
        DBURL: {process.env.DATABASE_URL?.substring(0, 20)}...
        <br />
        {JSON.stringify(users, null, 2)}
      </main>
    </div>
  );
}
