"use server";

import postgres from "postgres";
import invariant from "tiny-invariant";

export async function createUser() {
  invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");

  const sql = postgres(process.env.DATABASE_URL!);
  const users =
    await sql`insert into users (id, name) values (1, 'Alice from branch') on conflict do nothing returning *`;
  return users[0];
}
