import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  /*breakpoints: {
    sm: '360px',
    md: '800px',
  },
  components: {
    Input: {
      size: {
        ResponsiveValue: {
          xs: '360px',
          sm: '500px',
          md: '800px',
        }
      }
    },
  },*/
})

const apolloLink = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'same-origin', // in order to send cookies and force cors
  //credentials: 'include',
  //headers: 'Content-Type',
  //headers: {
  //  Access-Control-Allow-Origin: true
  //}
});

const client = new ApolloClient({
  //uri: 'http://localhost:4000',
  link: apolloLink,
  cache: new InMemoryCache(),
  //credentials: 'include',
  //fetchOptions: {
  //  mode: 'no-cors',
  //},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
