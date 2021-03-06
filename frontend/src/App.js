
import './App.css';

import {useState, useEffect} from "react";

function App() {

  const [data, setData] = useState();

  useEffect( () => {
    async function fetchData() {
      const res = await fetch("https://deploy-test-kc.herokuapp.com/users");
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, [])


  return (
    <div className="App">
      <p>Here's the data!</p>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

export default App;
