import "./App.css";
import "bulma/css/bulma.css";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
            {/* Como es la ultima ruta, la llamara si es que ninguna de las anteriores ha sido cargada, pagina default */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
