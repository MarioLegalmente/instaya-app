import React from "react"
import {Link } from "wouter"


export default function Registro (){
    return(
        <div className="container">
        <h3 className="fw-bold text-center mt-5 text-uppercase p-3 col-sm-12 col-md-7 row justify-content-end">Registro usuarios</h3>
        <div className="row justify-content-center align-items-center" style={{height: "500px"}}>
            <div className="bg-light col-sm-12 col-md-6 border border-white p-5">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        placeholder="Fulanito" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Usurio</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        placeholder="InstaYa" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Contraseña</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        placeholder="********" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="team@instaya.com" />
                </div>

                <div className="mb-3" >
                  <Link href="/listado"><button type="button"className="btn btn-secondary">Crear</button></Link> 
                </div>
            
            </div>
        </div>
    </div>
    )
}