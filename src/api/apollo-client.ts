import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  HttpLink,
} from "@apollo/client";

const HOST_API = process.env.REACT_APP_API_URL as string;
const httpLink = new HttpLink({
  uri: HOST_API+".netlify/functions/index",
  headers:{
    "Access-Control-Allow-Origin": "*"
  },
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions,
});
