import { SessionProvider } from "next-auth/react";
import "./styles.css";

import type { Session } from "next-auth";
import type { AppProps } from "next/app";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session} basePath="dev-days-test">
      <Component {...pageProps} />
    </SessionProvider>
  );
}
