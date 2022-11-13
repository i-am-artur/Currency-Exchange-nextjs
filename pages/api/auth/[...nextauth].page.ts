import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";

import credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        //usually database lookup
        if (
          credentials?.username === "admin@admin.com" &&
          credentials?.password === "admin"
        ) {
          return {
            id: 2,
            name: "admin",
            email: "admin@admin.com",
          };
        }

        //login failed
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }: any) => {
      if (token) {
        session.id = token.id;
        session.user.image = token.picture ?? null;
      }

      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
};

export default NextAuth(authOptions);
