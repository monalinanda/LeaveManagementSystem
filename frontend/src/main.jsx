import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import appStore from "./utils/appStore.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
	// TODO => Update the uri on production
	uri: import.meta.env.VITE_NODE_ENV === "development" ? "http://localhost:4000/graphql" : "https://leave-management-system-backend.vercel.app/graphql",   // the URL of our GraphQL server.
	cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
	credentials: "include", // This tells Apollo Client to send cookies along with every request to the server.
	 fetchOptions: {
       		 mode: 'no-cors'
      }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
     <Provider store={appStore}>
    <App />
    </Provider>
    </ApolloProvider>
)
