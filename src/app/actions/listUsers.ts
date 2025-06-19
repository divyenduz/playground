"use server";

import postgres from "postgres";
// import invariant from "tiny-invariant";

export async function listUsers() {
  //   invariant(process.env.DATABASE_URL, "DATABASE_URL is not set");

  console.log(process.env);
  console.log(process.env.DATABASE_URL);

  const sql = postgres(process.env.DATABASE_URL!);
  const users = await sql`select * from users`;
  return users;
}
