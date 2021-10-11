import { execSync } from "child_process";

try {
  execSync(`yarn prisma migrate dev`, { stdio: [0, 1, 2] });

  console.log("\n\n\nℹ️ Here's the git diff:\n\n");
  execSync(`git diff --exit-code`, { stdio: [0, 1, 2] });
} catch (err) {
  console.error("\n\n");
  console.error(`❌  You need to run 'yarn dx' locally in the root folder`);

  process.exit(1);
}