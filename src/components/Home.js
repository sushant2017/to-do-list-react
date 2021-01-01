import React, { useState } from "react";
import Login from "./Login";
const Home = () => {
  const [count, setState] = useState(0, 9);
  return (
    <div>
      {count}
      <Login username="sushant" password="password" />
      <button onClick={() => setState(count + 1)}> Update State </button>
    </div>
  );
};

export default Home;
