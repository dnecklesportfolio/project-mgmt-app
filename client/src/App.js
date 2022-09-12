import Header from "./components/Header.jsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import AddClientModal from './components/AddClientModal'

/**
 *setup the variable to hold ApolloClient uri and cache
 *then create Apollo provider and wrap everything around it,
 *also pass the client in
 */
//sets up the cache for the whole object
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
        <AddClientModal/>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
