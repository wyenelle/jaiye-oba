import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Github from "./component/Github";
import Error from "./component/Error";
import Navbar from "./component/Navbar";
import stateful from "./contextApi";
import GithubInfo from "./component/GithubInfo";
import Testing from './component/Testing'
import ErrorBoundary from "./component/ErrorBoundary";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("https://api.github.com/users/whizzy93/repos")
      .then((res) => res.json())
      .then(response => setData(response))
      data && setLoading(false)
  
  }, []);
data && console.log(data);
  return ( 
    <div className="App">
      <Navbar />
      <ErrorBoundary>
      <stateful.Provider value={{ loading, data }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/github/:id" element={<GithubInfo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </stateful.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
