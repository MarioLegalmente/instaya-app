import React, { useState } from "react"
import { Link , useLocation } from "wouter"


export default function Registro() {

    const [error, setError] = useState("")
    const [success, setSuccss] = useState("")
    const [location, setLocation] = useLocation("")

    function handleRegister(event) {
        event.preventDefault()

        console.log({event})
        
        const nombreCompleto = event.target[0].value
        const usuario = event.target[1].value
        const password = event.target[2].value
        const correo = event.target[3].value

        const body = {
            nombreCompleto,
            usuario,
            password,
            correo

        }

        fetch("https://instaya-tae3.onrender.com/api/user", {method:"POST", body:JSON.stringify(body), headers:{"Content-type":"application/json"}})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            if(data.error === true){
                setError(data.message)
                return
            }
            setSuccss(data.message)
            event.target.reset()
            setTimeout(()=>{
                setLocation("/")
            },2000)

        })
    }
    return (
        <div className="container">
            <h3 className="fw-bold text-center mt-5 text-uppercase p-3 col-sm-12 col-md-7 row justify-content-end">Registro usuarios</h3>
            <div className="row justify-content-center align-items-center" style={{height:"500px"}}>
                <div className="bg-light col-sm-12 col-md-6 border border-white p-5">
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="nombreCompleto" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombreCompleto"
                                placeholder="Onenombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="usuario"
                                placeholder="instaya" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="text" className="form-control" id="password"
                                placeholder="********" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="correo"
                                placeholder="team@instaya.com" />
                        </div>
                        {error!== "" &&<p className="alert alert-danger">{error}</p>}
                        {success!== "" &&<p className="alert alert-success">{success}</p>}
                        <div className="mb-3" >
                        <button type="submit" className="btn btn-secondary">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}