import { useState } from 'react'

function ContactForm() {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const submitForm = (event) => {
        event.preventDefault();

        // Obtener datos del formulario
        const nombre = event.currentTarget.contactoNombre.value.trim();
        const correo = event.currentTarget.contactoCorreo.value.trim();
        const tipo = event.currentTarget.contactoTipo.value;
        const asunto = event.currentTarget.contactoAsunto.value.trim();
        const detalle = event.currentTarget.contactoDetalle.value.trim();
        const acepto = event.currentTarget.contactoAcepto.checked;

        // Validar que el nombre tenga menos de 100 caracteres y no sea un texto en blanco
        const nombreOk = nombre.length > 0 && nombre.length <= 100;
        // Validar que el correo cumpla con el formato
        const correoOk = correo.length > 0 && emailRegex.test(correo);
        // Validar que se haya seleccionado el tipo de solicitud
        const tipoOk = tipo !== "";
        // Validar que el asunto tenga menos de 100 caracteres y no sea un texto en blanco
        const asuntoOk = asunto.length > 0 && asunto.length <= 100;
        // Validar que el detalle tenga menos de 1000 caracteres y no sea un texto en blanco
        const detalleOk = detalle.length > 0 && detalle.length <= 1000;
        // Validar que se hayan aceptado los términos
        const aceptoOk = acepto;

        // Actualizar los booleanos para mostrar mensajes si uno de los campos no es valido
        setNombreValido(nombreOk);
        setCorreoValido(correoOk);
        setTipoValido(tipoOk);
        setAsuntoValido(asuntoOk);
        setDetalleValido(detalleOk);
        setAceptoValido(aceptoOk);

        if (nombreOk && correoOk && tipoOk && asuntoOk && detalleOk && aceptoOk) {
            alert("Se ha enviado su solicitud de contacto.");
        }
    };

    const [nombreValido, setNombreValido] = useState(true);
    const [correoValido, setCorreoValido] = useState(true);
    const [tipoValido, setTipoValido] = useState(true);
    const [asuntoValido, setAsuntoValido] = useState(true);
    const [detalleValido, setDetalleValido] = useState(true);
    const [aceptoValido, setAceptoValido] = useState(true);

    return (
        <form id="formulario-contacto" action="/api/contacto" methdo="post" onSubmit={submitForm}
            className="container text-start bg-light border border-2 border-secondary my-3 p-5">
            <h1 className="fw-bold mb-4">Contáctanos</h1>
            <div className="row g-3">
                <div className="col-12">
                    <label htmlFor="contactoNombre" className="form-label">Nombre completo</label>
                    <input type="text" className={`form-control border-secondary ${nombreValido ? '' : 'is-invalid'}`} id="contactoNombre" name="contactoNombre" maxLength={100}  />
                    <div id="contactoNombreFeedback" className="invalid-feedback">
                        Debes ingresar un nombre (no más de 100 caracteres).
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="contactoCorreo" className="form-label">Correo electrónico</label>
                    <input type="text" className={`form-control border-secondary ${correoValido ? '' : 'is-invalid'}`} id="contactoCorreo" name="contactoCorreo"  />
                    <div id="contactoCorreoFeedback" className="invalid-feedback">
                        Debes ingresar un correo electrónico válido.
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="contactoTipo" className="form-label">Tipo de solicitud</label>
                    <select className={`form-select border-secondary ${tipoValido ? '' : 'is-invalid'}`} id="contactoTipo" name="contactoTipo" >
                        <option selected disabled value="">Seleccionar</option>
                        <option>Consulta</option>
                        <option>Reclamo</option>
                        <option>Sugerencia</option>
                    </select>
                    <div id="contactoTipoFeedback" className="invalid-feedback">
                        Debes seleccionar un tipo de solicitud
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="contactoAsunto" className="form-label">Asunto</label>
                    <input type="text" className={`form-control border-secondary ${asuntoValido ? '' : 'is-invalid'}`} id="contactoAsunto" name="contactoAsunto"  />
                    <div className="invalid-feedback">
                        Debes ingresar un asunto (no más de 100 caracteres).
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="contactoDetalle" className="form-label">Mensaje</label>
                    <textarea className={`form-control border-secondary ${detalleValido ? '' : 'is-invalid'}`} id="contactoDetalle" name="contactoDetalle" placeholder="Describa detalladamente el motivo de su solicitud" ></textarea>
                    <div className="invalid-feedback">
                        Debe ingresar el detalle de su solicitud (hasta 1000 caracteres).
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className={`form-check-input border-secondary ${aceptoValido ? '' : 'is-invalid'}`} type="checkbox" value="" id="contactoAcepto" name="contactoAcepto"  />
                        <label className="form-check-label" htmlFor="contactoAcepto">
                            Acepto que Gamestore me contacte por correo electrónico para realizar seguimiento a mi solicitud
                        </label>
                        <div id="contactoAceptoFeedback" className="invalid-feedback">
                            Debes aceptar los términos para continuar
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-dark text-light" type="submit">Enviar solicitud</button>
                </div>
            </div>
        </form>

    )
}

export default ContactForm;