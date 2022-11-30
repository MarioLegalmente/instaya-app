import React from "react";
import { Route } from "wouter";
import Actualizar from "./components/actualizar";
import Listado from "./components/Listado";
import Login from "./components/Login";
import Recoger from "./components/Recoger";
import Registro from "./components/registro";

function App() {
  return (
    <>
    <div className="App">
      <Route path="/" component={Login} />
      <Route path="/registro" component={Registro} />
      <Route path="/listado" component={Listado} />
      <Route path="/recoger" component={Recoger} />
      <Route path="/actualizacion" component={Actualizar} />
     
    </div>
    </>
  )
}

export default App
