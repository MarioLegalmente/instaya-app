import React from "react"
import {Link } from "wouter"

export default function Login() {
    return (
        <div className="container">
            <h3 className="fw-bold text-center mt-5 text-uppercase p-3 col-sm-12 col-md-7 row justify-content-end">Gestión de Paquetes - Inicio</h3>
            <div className="row justify-content-center align-items-center" style={{height: "500px"}}>
                <div className="bg-light col-sm-12 col-md-6 border border-white p-5">
                    <Link href="/registro" className="link-primary row justify-content-end m-0">Reguistrarse</Link>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Usurio</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="InstaYa" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Contraseña</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="********" />
                    </div>

                    <div className="mb-3">
                        <Link href="/listado"> <button type="submit" className=" btn btn-secondary ">Iniciar Sesión
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

