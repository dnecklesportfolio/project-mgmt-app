import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

export default function Clients() {
  //grab the states from usequery
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something happened..</p>;
  return (
    <>
      {!loading && !error && (
        //look up tables here table thead tr th, and bootstrap classes
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              //we use the data from above to generate each row
              data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))
            }
          </tbody>
        </table>
      )}
    </>
  );
}
