import React from "react"
import {Link } from "wouter"


export default function Listado(){
    return(
        <div className="container">
        <h3 className="fw-bold text-center mt-5 text-uppercase p-3 col-sm-12 col-md-6 row justify-content-end">Listado de ordenes</h3>
        <div className="row justify-content-center align-items-center"style={{height:"500px"}}>
            <div className="bg-light col-sm-12 col-md-6 border border-white">
                <Link href="/recoger" className="link-primary row justify-content-end m-0 p-3">Crear orden</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Servicio</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Ciudad Entrega </th>
                            <th scope="col">Dirección Entrega</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                        <Link href="/actualizacion"><th className="row">1</th></Link>
                            <td>01/01/2022</td>
                            <td>Santa Marta</td>
                            <td>Carrera 1-2 #3</td>
                            <td>Guardado</td>
                        </tr>
                        <tr>
                        <Link href="/actualizacion"><th className="row">2</th></Link>
                            <td>01/01/2022</td>
                            <td>Cartagena</td>
                            <td>Carrera 2-5 #6</td>
                            <td>Cancelado</td>
                        </tr>
                        <tr>
                        <Link href="/actualizacion"><th className="row">3</th></Link>
                            <td >01/01/2022</td>
                            <td>B/Quilla</td>
                            <td>Carrera 6-5 #43</td>
                            <td>Cumplido</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}