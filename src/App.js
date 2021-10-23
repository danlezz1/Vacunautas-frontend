import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import VacunasCrear from "./pages/VacunasCrear";
import VacunasEditar from "./pages/VacunasEditar";
import Creditos from "./pages/Creditos";

export default class App extends React.Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path = "/" exact component = {Login} />
          <Route path = "/home" exact component = {Home} />
          <Route path = "/vacunas-crear" exact component = {VacunasCrear} />
          <Route path = "/vacunas-editar/:vacunaId" exact component = {VacunasEditar} />
          <Route path = "/creditos" exact component = {Creditos} />
        </Switch>
      </Router>
    )
  }
}
