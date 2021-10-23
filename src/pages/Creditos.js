import React from "react";
import Navbar from "../components/Navbar";
import './Creditos.css';
import {Link} from 'react-router-dom';

export default class Creditos extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                    <div className="container">
                        <div id="creditos" className="creditos-wrap mt-4 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="label-titulo text-center">DESARROLLO DE SOFTWARE - CICLO III MISIÓN TIC 2022</h1>
                                <br/><br/><br/>
                                <h1 className="label text-center">Daniel Barros</h1>
                                <br/>
                                <h1 className="label text-center">Daniel Martínez</h1>
                                <br/>
                                <h1 className="label text-center">Franklin Gómez</h1>
                                <br/>
                                <h1 className="label text-center">Elizabeth Peña</h1>
                                <br/>
                                <h1 className="label text-center">Jairo Huertas</h1>
                                <br/>
                                <h1 className="label text-center">Jorge Lopera</h1>
                                <br/><br/>
                                <div className="d-flex justify-content-center">
                                    <Link to="/home" className="btn btn-outline-warning">Regresar</Link>
                                </div> 
                            </div>         
                        </div>
                    </div> 
            </div>
        )
    }
} 