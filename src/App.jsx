import "./App.css";
import useFetch from "/src/useFetch.js";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=100"
  );

  const colors = Array.from({ length: 100 }, (_, i) =>
    `hsl(${i * 3.6}, 75%, 60%)`
  );

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Photo Gallery</h1>

      <div className="gallery">
        {data.map((item, index) => {
          const color = colors[index % colors.length];

          return (
            <div className="card" key={item.id}>
              <div
                className="color-box"
                style={{ backgroundColor: color }}
              >
                <span className="dimension">
                  250 × 180
                </span>
              </div>

              <h3
                style={{ backgroundColor: color }}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
