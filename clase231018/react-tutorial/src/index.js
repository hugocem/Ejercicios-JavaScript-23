import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h1>Hola, REACT --------</h1>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("mifooter"));
