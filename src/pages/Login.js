import React from "react";
import './Login.css';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {

    componentDidMount(){
        document.getElementById("nombreUsuario").focus()
    }

    render(){
        return(
            <div id="login" className="login-wrap">
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-8">
                            <div id="login-box" className="col-md-12">
                                <div id="login-form" className="form">
                                    <h3 className="text-center mt-md-4">Iniciar Sesión</h3><br /><br />
                                    <div>
                                        <label htmlFor="nombreUsuario" className="label mb-2 ms-2">Nombre de usuario:</label>
                                        <input type="text" name="nombreUsuario" id="nombreUsuario" placeholder="Ingrese el nombre de usuario"
                                            className="input col-md-12"/>
                                    </div><br />
                                    <div>
                                        <label htmlFor="contraseña" className="label mb-2 ms-2">Contraseña:</label>
                                        <input type="text" name="contraseña" id="contraseña" placeholder="Ingrese la contraseña"
                                            className="input col-md-12"/>
                                    </div><br /><br />
                                    <div className="d-flex justify-content-center">
                                        <Link to="/home" className="btn btn-outline-warning">Ingresar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
