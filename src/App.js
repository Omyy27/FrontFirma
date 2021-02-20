import React from "react";
import Aside from "./components.design/Aside";
import Content from "./components.design/Content";
import Footer from "./components.design/Footer";
import Header from "./components.design/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reuniones from "./pages/Reuniones";
import Participantes from "./pages/Participantes";
import Actas from "./pages/Actas";
import AgregarReunion from "./pages/AgregarReunion";
import "./grid.css";
import AsideMin from "./components.design/AsideMin";
import CrearActa from "./pages/CrearActa";

function App() {
  return (
    <Router>
      <div
        id="kt_body"
        className="quick-panel-right demo-panel-right offcanvas-right header-fixed header-mobile-fixed subheader-enabled aside-enabled aside-static page-loading"
      >
        <div className="d-flex flex-column flex-root">
          <div className="d-flex flex-row flex-column-fluid page">
            <Aside />
            <div
              className="d-flex flex-column flex-row-fluid wrapper"
              id="kt_wrapper"
            >
              <div className="grid-container">
               
                  <Header />
               
                <div className="asidemin mt-5">
                  <AsideMin  />
                </div>
                <div className="content">
                  <Switch>
                    <Route path="/reuniones">
                      <Reuniones />
                    </Route>
                    <Route path="/participantes">
                      <Participantes />
                    </Route>
                    <Route path="/actas">
                      <Actas />
                    </Route>
                    <Route path="/crearacta">
                        <CrearActa />
                    </Route>
                    <Route path="/agregarreunion">
                      <AgregarReunion />
                    </Route>

                    <Route path="/">
                      <Content />
                    </Route>
                  </Switch>
                </div>
                <div className="footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
