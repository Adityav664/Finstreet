import React from "react";
import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import MoviePage from "./component/MoviePage";
import Footer from "./component/Footer";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Body />}/>
          <Route path="/:id" element={<MoviePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
