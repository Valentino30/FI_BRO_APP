import { Aggregated, Result } from "./type/data";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState<Aggregated>();

  const fetchData = async () => {
    const data = await axios.get(
      "https://api.polygon.io/v2/aggs/ticker/SP/range/1/day/2021-06-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=Umlk2WnTHnjU0wfJzZJjyZeId4YeW8CQ"
    );

    const average = (
      data.data.results
        .map((result: Result) => result.o)
        .reduce(
          (previousOpening: string, currentOpening: string) =>
            previousOpening + currentOpening
        ) / data.data.count
    ).toFixed(2);

    setData({
      ...data.data,
      average,
    });
  };

  return (
    <div className="App">
      {data && <p>{data.average} 🤘</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;
