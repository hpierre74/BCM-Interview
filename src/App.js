import React, { Component } from "react";
import SocketAlert from "./components/SocketAlert/SocketAlert";
import OrdersLayout from "./components/OrdersBoard/OrdersLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Interview | BCM Energy</h1>
        </header>
        <main>
          <OrdersLayout />
          <SocketAlert type="info" />
        </main>
        <footer className="App-footer">
          BCM Energy, React Interview | Pierre Huyghe
        </footer>
      </div>
    );
  }
}

export default App;
