import React from "react";
import Navbar from '../components/Navbar';
import './VacunasEditar.css';
import {Link} from 'react-router-dom';
import APIInvoke from "../utils/APIInvoke";

export default class VacunasEditar extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            formulario: {
                id: '',
                nombre: '',
                dosis: '',
                viaAplicacion: '',
                laboratorio: '',
                num_lote: ''
            }
        }
    }

    async componentDidMount(){
        const vacunaId = this.props.match.params.vacunaId
        const response = await APIInvoke.invokeGET(`/vacunas/${vacunaId}`)
        this.setState({
            formulario: {
                id: response.id,
                nombre: response.nombre,
                dosis: response.dosis,
                viaAplicacion: response.viaAplicacion,
                laboratorio: response.laboratorio,
                num_lote: response.num_lote,
            }
        })
        // console.log('el estado del formulario es:', this.state.formulario)
    }

    async handleChange(e){
        await this.setState({
            formulario: {
                ...this.state.formulario, /*hereda los atributos que están escritos en los input del formulario*/
                [e.target.name]: e.target.value /*de acuerdo al nombre del input va a asignar el valor al estado respectivo*/
            }
        })
        // console.log('el estado del formulario ahora es:', this.state.formulario)
    }

    async editar(){
        const data = this.state.formulario
        const response = await APIInvoke.invokePUT(`/vacunas`, data)
        if (response.id !== 0) {
            this.props.history.push(`/home`)
        }else {
            console.log(response.message)
        }
    }

    render(){
        const formulario = this.state.formulario;
        return(
            <div>
                <Navbar/>
                <div id="vacunas-editar" className="vacunas-editar-wrap mt-4">
                    <div className="container">
                        <div id="vacunas-editar-row" className="row justify-content-center align-items-center">
                            <div id="vacunas-editar-column" className="col-md-11">
                                <div id="vacunas-editar-box" className="col-md-12">
                                    <div id="vacunas-editar-form" className="form">
                                        <h3 className="text-center mt-md-4">Editar Vacuna</h3><br /><br />
                                        <div>
                                            <label htmlFor="nombre" className="label mb-2 ms-2">Nombre Vacuna:</label>
                                            <input type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre de la vacuna"
                                                className="input col-md-12" onChange={this.handleChange.bind(this)} value={formulario.nombre}/>
                                        </div><br />
                                        <div>
                                            <label htmlFor="dosis" className="label mb-2 ms-2">Dosis:</label>
                                            <input type="text" name="dosis" id="dosis" placeholder="Ingrese el tipo de dosis de la vacuna"
                                                className="input col-md-12" onChange={this.handleChange.bind(this)} value={formulario.dosis}/>
                                        </div><br />
                                        <div>
                                            <label htmlFor="viaAplicacion" className="label mb-2 ms-2">Vía de aplicación:</label>
                                            <input type="text" name="viaAplicacion" id="viaAplicacion" placeholder="Ingrese la vía de aplicación de la vacuna"
                                                className="input col-md-12" onChange={this.handleChange.bind(this)} value={formulario.viaAplicacion}/>
                                        </div><br />
                                        <div>
                                            <label htmlFor="laboratorio" className="label mb-2 ms-2">Laboratorio:</label>
                                            <input type="text" name="laboratorio" id="laboratorio" placeholder="Ingrese el nombre del laboratorio de la vacuna"
                                                className="input col-md-12" onChange={this.handleChange.bind(this)} value={formulario.laboratorio}/>
                                        </div><br />
                                        <div>
                                            <label htmlFor="num_lote" className="label mb-2 ms-2">Número de lote:</label>
                                            <input type="text" name="num_lote" id="num_lote" placeholder="Ingrese el número de lote de la vacuna"
                                                className="input col-md-12" onChange={this.handleChange.bind(this)} value={formulario.num_lote}/>
                                        </div><br />
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-outline-success" onClick={this.editar.bind(this)}>Guardar Cambios</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/home" className="btn btn-outline-danger">Cancelar</Link>
                                        </div>
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