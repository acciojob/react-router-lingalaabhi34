
import React from "react";
import './../styles/App.css';
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
const Home = () => {
  return <h1>Welcome to the website</h1>;
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
      <Link to="/About">About</Link>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
