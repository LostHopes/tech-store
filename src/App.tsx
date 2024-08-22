import { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
  
        <Footer />
      </>
    );
  }
}

export default App;