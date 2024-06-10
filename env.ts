import { z } from "zod";

const AUTH = {
  AUTH_SECRET: z.string(),
  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),
};

const env = z.object({
  ENVIRONMENT: z.enum(["local", "development", "preview", "production"]),
  DATABASE_URL: z.string(),
  ...AUTH,
});

env.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}

export default env;
