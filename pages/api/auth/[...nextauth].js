import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const createOptions = (req) => ({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      redirectUri:
        "https://next-auth-test-rewrites.vercel.app/dev-days-test/api/auth/callback/github",
    }),
  ],
});

export default async (req, res) => NextAuth(req, res, createOptions(req));
