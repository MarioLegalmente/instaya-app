import React from "react";



export default function Actualizar(){
    return(
        <section className="container mt-5">
        <div className="card">
            <div className="card-header">
                <h5 className="card-title m-0 py-2"><strong>Gestión de Paquetes</strong> - Actualización de ordenes</h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="fechaActual" className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="fechaActual" name="fechaActual" required />
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="horaActual" className="form-label">Hora</label>
                            <input type="time" className="form-control" id="horaActual" name="horaActual" required />
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="horaActual" className="form-label">Estado</label>
                            <select defaultValue ="Guardado" className="form-select" aria-label="Default select example">
                                <option value="Guardado">Guardado</option>
                                <option value="Cancelado">Cancelado</option>
                                <option value="Cumplido">Cumplido</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="ancho" className="form-label">Ancho</label>
                            <input type="number" className="form-control" id="ancho" name="ancho"required min="0"/>
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

                    <div className="d-grid col-2 mx-auto">
                        <div className="mb-3">
                            <button type="submit" className="btn btn-secondary">Actualizar orden</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>
    )
}