import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: `http://${process.env.EXPO_IP_ADDRESS}/:${process.env.EXPO_API_PORT}`,
    cache: new InMemoryCache()
});