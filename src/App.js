import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

//components
import BookList from "./components/BookList";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <h1>TechGini's Reading List</h1>
          <BookList />
      </div>
    </ApolloProvider>
    
  );
}
export default App;


