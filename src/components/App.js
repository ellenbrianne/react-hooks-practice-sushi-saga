import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      const randomize = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        };
      };
      randomize(sushis);
      setSushis(sushis);
    });
  }, [])

  const fourSushi = sushis.slice(0, 4);

  return (
    <div className="app">
      <SushiContainer fourSushi={fourSushi}/>
      <Table />
    </div>
  );
}

export default App;
