import { $ } from "bun";
import { Branch } from "./types";

async function main() {
  const manifestResponse = await fetch(
    "https://xata-cli-versions.s3.amazonaws.com/channels/latest/manifest.json"
  );
  const manifest = await manifestResponse.json();

  const linuxX64Target = manifest.targets["linux-x64"];
  const binaryUrl = linuxX64Target.url;

  await $`curl -L -o xata ${binaryUrl}`;
  await $`chmod +x xata`;
  await $`cp ./xata /usr/local/bin/xata`;

  await $`xata branch delete ${process.env.VERCEL_GIT_COMMIT_REF} --yes || true`.quiet();
  await $`xata branch create --name ${process.env.VERCEL_GIT_COMMIT_REF}`.quiet();

  const branch: Branch =
    await $`xata branch view ${process.env.VERCEL_GIT_COMMIT_REF} --json`
      .quiet()
      .json();

  console.log(`export DATABASE_URL='${branch.connectionString}';`);
  console.log(`export FROM_ENV='test';`);
}

main();
