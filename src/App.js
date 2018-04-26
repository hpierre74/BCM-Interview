import React, { Component } from "react";
import { Container } from 'reactstrap';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./components/Layout/Main";

const App = () => {
  return (
    <div className="App">
      <Header title="BCM Energy" />
      <Main />
      <Footer title="BCM Energy, React Interview | Pierre Huyghe" />
    </div>
  );
}
 
export default App;
