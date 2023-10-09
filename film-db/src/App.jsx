// import { useState } from 'react';
import "./App.css";
import NavBar from "./components/NavBar";
// import getData from './Hooks/useContentful';
import Slider from "./components/Slider";

function App() {
  // const [count, setCount] = useState(0)
  // getData()
  return (
    <div className="">
      <NavBar />
      <Slider />
    </div>
  );
}

export default App;
