import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            vacunas: []
        } 
    }

    async componentDidMount(){
        let response = await APIInvoke.invokeGET("/vacunas")
        this.setState({
            vacunas: response
        })
    }

    async remove(e, vacuna){
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/vacunas/${vacuna.id}`)
        this.componentDidMount()
    }
    
    render(){

        let arregloVacunas = this.state.vacunas

        return(
            <div>
                <Navbar/>
                <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/vacunas-crear" className="btn btn-outline-warning">
                                Agregar Vacuna
                            </Link>
                            <br /><br />
                            {
                                arregloVacunas.length === 0 ? <div className="alert alert-warning text-center">No hay vacunas registradas.</div> : 
                                    <table className="table table-light table-bordered table-hover text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Dosis</th>
                                            <th scope="col">Vía de aplicación</th>
                                            <th scope="col">Laboratorio</th>
                                            <th scope="col" className="col-sm-1">N° de lote</th>
                                            <th scope="col" className="col-sm-1">Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            arregloVacunas.map(
                                                vacuna =>
                                                    <tr key={vacuna.id}>   
                                                        <td>{vacuna.id}</td>
                                                        <td className="text-start">{vacuna.nombre}</td>
                                                        <td>{vacuna.dosis}</td>
                                                        <td>{vacuna.viaAplicacion}</td>
                                                        <td>{vacuna.laboratorio}</td>
                                                        <td>{vacuna.num_lote}</td>
                                                        <td>
                                                            <Link to={`/vacunas-editar/${vacuna.id}`} className="btn btn-outline-primary btn-sm" title="Editar">
                                                                <i className="far fa-edit"></i>
                                                            </Link>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <button onClick={(e) => this.remove(e, vacuna)} className="btn btn-outline-danger btn-sm" title="Eliminar">
                                                                <i className="far fa-trash-alt"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                            )
                                        }                                   
                                    </tbody>
                                </table>
                            }
                            
                        </div>
                    </div>                                  
                </div>
            </div>
        )
    }

}
