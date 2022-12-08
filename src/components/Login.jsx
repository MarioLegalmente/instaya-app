import React, { useState } from "react"
import { Link, Redirect, useLocation } from "wouter"

export default function Login() {
    const [error, setError] = useState("")

    const [location, setLocation] = useLocation("")

    function handleLogin( event ){
        event.preventDefault()
        const usuario = event.target[0].value
        const password = event.target[1].value

        fetch("https://instaya-tae3.onrender.com/api/user?usuario="+ usuario.trim()+"&password="+ password.trim())
        .then((res) => res.json())
        .then((data) => {

            if(data.error === true){
                setError(data.message)
                return
            }
            localStorage.setItem("userId", data.data.id)
            localStorage.setItem("nameUser", data.data.nombreCompleto)

            setLocation("/listado")


        })
    }

    return (
        <div className="container">
            <h3 className="fw-bold text-center mt-5 text-uppercase p-3 col-sm-12 col-md-7 row justify-content-end">Gestión de Paquetes - Inicio</h3>
            <div className="row justify-content-center align-items-center" style={{ height: "500px" }}>
                <div className="bg-light col-sm-12 col-md-6 border border-white p-5">
                    <Link href="/registro" className="link-primary row justify-content-end m-0">Reguistrarse</Link>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">Usurio</label>
                            <input type="text" className="form-control" id="usuario" placeholder="InstaYa" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password"
                                placeholder="********" />
                        </div>

                        {error!== "" &&<p className=" alert .text-danger">{error}</p>}
                        <div className="mb-3">
                           <button type="submit" className=" btn btn-secondary ">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

