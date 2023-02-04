import "@/styles/destyle.css";
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";
import Header from "@/components/nav/Header";
import Box from '@mui/material/Box';

export default function App({ Component, pageProps }: AppProps) {
  const redirectUri = `${process.env["NEXT_PUBLIC_BASE_URL"]}/surveys`;
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      redirectUri={redirectUri}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!}
      cacheLocation='localstorage'
      useRefreshTokens={true}
    >
      <Header />
      <Box minHeight={"95vh"} bgcolor="#edf2f7" pb={4}>
        <Component {...pageProps} />
      </Box>
    </Auth0Provider>
  );
}
