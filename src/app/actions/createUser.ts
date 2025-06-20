"use server";

import postgres from "postgres";
import invariant from "tiny-invariant";

export async function createUser(id: number, name: string) {
  invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");

  const sql = postgres(process.env.DATABASE_URL!);
  const users = await sql`insert into users (id, name) values (${id}, ${
    name + " from branch"
  }) on conflict (id) do update set name = excluded.name returning *`;
  return users[0];
}
