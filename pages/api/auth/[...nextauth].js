import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const createOptions = (req) => ({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async redirect(url, baseUrl) {
      return baseUrl ? baseUrl : url;
    },
  },
  baseUrl: process.env.NEXTAUTH_URL,
});

export default async (req, res) => NextAuth(req, res, createOptions(req));
