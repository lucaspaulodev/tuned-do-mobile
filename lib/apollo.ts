import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://192.168.0.6:3333/',
    cache: new InMemoryCache()
});