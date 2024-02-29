
import React from "react";
import './../styles/App.css';
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
const Home = () => {
  return <h1>Welcome to my website!</h1>;
}

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>This is the simple React Program...!</p>
    </>
  );
}
const App = () => {
  return (
    <BrowserRouter>
    <div>
      {/* Do not remove the main div */}

<Link to="">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
