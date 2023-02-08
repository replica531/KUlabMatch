import "@/styles/destyle.css";
import type { AppProps } from 'next/app'
import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";
import { partial, pipeComponents } from "@/utils/pipe-components";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from "@/styles/mui";
import Header from "@/components/nav/Header";
import Box from '@mui/material/Box';

const auth0Options: Auth0ProviderOptions = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
  redirectUri: `${process.env["NEXT_PUBLIC_BASE_URL"]}`,
  audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!,
  cacheLocation: 'localstorage',
  useRefreshTokens: true,
};

const Provider = pipeComponents(
  partial(ThemeProvider, { theme }),
  partial(Auth0Provider, auth0Options),
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Header />
      <Box minHeight={"95vh"} bgcolor="#edf2f7" pb={4}>
        <Component {...pageProps} />
      </Box>
    </Provider>
  );
}
