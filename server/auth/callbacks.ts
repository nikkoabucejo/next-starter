import { User } from "next-auth";
import type { NextAuthConfig } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";

const callbacks: NextAuthConfig["callbacks"] = {
  async signIn() {
    return true;
  },
  async redirect({ baseUrl }) {
    return baseUrl;
  },
  async session({ session }) {
    return session;
  },
  async jwt({ token, user, isNewUser }) {
    console.log({ isNewUser });
    if (isNewUser) await newUser(user);

    return token;
  },
};

export default callbacks;

const newUser = async (user: AdapterUser | User) => {
  if (!user.id || !user.email) return false;
  const { id, email } = user;
  return true;
};
