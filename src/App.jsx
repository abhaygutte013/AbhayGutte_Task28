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
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }
{data.map((item, index) => {
  const color = colors[index % colors.length];

  return (
    <div className="card" key={item.id}>
     <div
  className="color-box"
  style={{ backgroundColor: color }}
>
  <span className="dimension">200 × 180</span>
</div>

      <h3
        style={{ backgroundColor: color }}
      >
        {item.title}
      </h3>
    </div>
  );
})}
}

export default App;