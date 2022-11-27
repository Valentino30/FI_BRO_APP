import { useEffect, useState } from "react";
import { GetData } from "./utils/index";
import { Data } from "./type/data";
import "./App.css";

function App() {
  const [data, setData] = useState<Data[] | []>([]);

  useEffect(() => {
    // @ts-ignore
    GetData().then((data) => setData(data?.data));
  }, []);

  return (
    <div className="App">
      {data[0] ? <p>{data[0].year} 🤘</p> : <p>🤌</p>}
      <button>Fetch Data</button>
    </div>
  );
}

export default App;
