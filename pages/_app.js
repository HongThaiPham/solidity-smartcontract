import "../styles/globals.css";
import Head from "next/head";
import Container from "@mui/material/Container";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Solidity SmartContract</title>
        <meta name="description" content="Solidity by Example" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Container sx={{ padding: 5 }}>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
