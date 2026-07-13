import "./App.css";
import useFetch from "/src/useFetch.js";

function App(){
  const {
    data,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="container">
      <h1>Custom useFetch Hook Demo</h1>
      {loading && (
        <h2>Loading data...</h2>
      )}
      {error&&(
        <h2>{error}</h2>
      )}
      {!loading&&!error&&(
        <div className="card-container">
          {data.map((user)=>(
            <div className="card"key={user.id}>
              <div className="top-box"></div>
              <h3>{user.name}</h3>
              <p>
                <strong>Username:</strong>{user.username}
              </p>
              <p>
                <strong>Email:</strong>{user.email}
              </p>
              <p>
                <strong>Phone:</strong>{user.phone}
              </p>
              <p>
                <strong>Website:</strong>{user.website}
              </p>
              <p>
                <strong>City:</strong>{user.address.city}
              </p>
              <p>
                <strong>Company:</strong>{user.company.name}
              </p>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default App;
