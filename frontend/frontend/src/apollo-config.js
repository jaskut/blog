import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from "@apollo/client/link/context";

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "http://127.0.0.1:8000/graphql", // Matches the url and port that Django is using
});

// Cache implementation
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    },
  };
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})