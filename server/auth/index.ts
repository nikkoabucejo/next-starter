import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import github from "next-auth/providers/github";
import callbacks from "./callbacks";
import db from "@server/db";

const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [github],
  session: { strategy: "jwt" },
  callbacks,
});

export { handlers, signIn, signOut };

export default auth;
