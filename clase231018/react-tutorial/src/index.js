import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h1>Hola, REACT --------</h1>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("mifooter"));
