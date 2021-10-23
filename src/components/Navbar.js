import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
            <Link to="/home" className="navbar-brand">
                <strong>Página Principal</strong>
            </Link>
            <Link to="/creditos" className="navbar-brand">
                <strong>Créditos</strong>
            </Link>
        </nav>
    )
}
