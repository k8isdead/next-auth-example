import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      redirectUri:
        "https://next-auth-test-rewrites.vercel.app/dev-days-test/api/auth/signin/github",
    }),
  ],
  // ...
});
