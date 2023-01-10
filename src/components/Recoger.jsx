import React, { useState } from "react"

export default function Recoger(){
    const [error, setError] = useState("")
    const [success, setSuccss] = useState("")


    function handleRecoger(event) {
        event.preventDefault()

        console.log({event})
        
        const fecha = event.target[0].value
        const hora = event.target[1].value
        const ancho = event.target[2].value
        const largo = event.target[3].value
        const alto = event.target[4].value
        const peso = event.target[5].value
        const direccionRecogida = event.target[6].value
        const ciudadRecogida = event.target[7].value
        const nombreDestinatario = event.target[8].value
        const idDestinatario = event.target[9].value
        const ciudadDestinatario = event.target[10].value
        const direccionDestinatario = event.target[11].value
      
        const body = {
            fecha,
            hora,
            ancho,
            largo,
            alto,
            peso,
            direccionRecogida,
            ciudadRecogida,
            nombreRecogida:"Oliver Atom",
            nitRecogida:"0005riente",
            nombreDestinatario,
            nitDestinatario:idDestinatario,
            ciudadDestinatario,
            direccionDestinatario,
            idUsuario:localStorage.getItem("userId"),
            nombreCompleto:localStorage.getItem("nameUser")

        }

        fetch("https://instaya-tae3.onrender.com/api/service", {method:"POST", body:JSON.stringify(body), headers:{"Content-type":"application/json"}})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            if(data.error === true){
                setError(data.message)
                return
            }
            setSuccss(data.message)
            event.target.reset()
        })
    }

    
    return(
        <div className="container mt-5">
        <div className="card">
            <div className="card-header">
                <h5 className="card-title m-0 py-2"><strong>Gestión de Paquetes</strong> - Registro de ordenes</h5>
            </div>
            <div className="card-body">
                <form onSubmit={ handleRecoger }>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="fecha" className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="fecha" name="fecha" required />
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="hora" className="form-label">Hora</label>
                            <input type="time" className="form-control" id="hora" name="hora" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="ancho" className="form-label">Ancho</label>
                            <input type="number" className="form-control" id="ancho" name="ancho" required min="0" />
                            <div className="form-text">Valor en centímetros (cm)</div>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="largo" className="form-label">Largo</label>
                            <input type="number" className="form-control" id="largo" name="largo" required min="0"
                                aria-describedby="largoHelp" />
                            <div id="largoHelp" className="form-text">Valor en centímetros (cm)</div>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="alto" className="form-label">Alto</label>
                            <input type="number" className="form-control" id="alto" name="alto" required min="0"
                                aria-describedby="altoHelp" />
                            <div id="altoHelp" className="form-text">Valor en centímetros (cm)</div>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="peso" className="form-label">Peso</label>
                            <input type="number" className="form-control" id="peso" name="peso" required min="0"
                                aria-describedby="pesoHelp" />
                            <div id="pesoHelp" className="form-text">Valor en Kilogramos (Kg)</div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="direccionRecogida" className="form-label">Dirección recogida</label>
                            <input type="text" className="form-control" id="direccionRecogida" name="direccionRecogida"
                                required placeholder="Calle 1 Transversal 10" />
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="ciudadRecogida" className="form-label">Ciudad de recogida</label>
                            <input type="text" className="form-control" id="ciudadRecogida" name="ciudadRecogida" required
                                placeholder="Ej: Barranquilla" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="nombreDestinatario" className="form-label">Nombre Destinatario</label>
                            <input type="text" className="form-control" id="nombreDestinatario" name='nombreDestinatario'
                                required placeholder="Ej: Juan Perez" />
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="idDestinatario" className="form-label">Identificación del Destinatario</label>
                            <input type="text" className="form-control" id="idDestinatario" name="idDestinatario" required
                                placeholder="Ej: 11111111111" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="ciudadEntrega" className="form-label">Ciudad de Entrega</label>
                            <input type="text" className="form-control" id="ciudadEntrega" name='ciudadEntrega' required
                                placeholder="Ej: Juan Perez" />
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="direccionEntrega" className="form-label">Dirección de Entrega</label>
                            <input type="text" className="form-control" id="direccionEntrega" name="direccionEntrega"
                                required placeholder="Ej: Calle 11 # 30 - 20" />
                        </div>
                    </div>
                    {error!== "" &&<p className="alert alert-danger">{error}</p>}
                    {success!== "" &&<p className="alert alert-success">{success}</p>}
                    <div className="d-grid col-2 mx-auto">

                        <div className="mb-3" >
                         <button type="submit" className="btn btn-secondary">Crear orden</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}