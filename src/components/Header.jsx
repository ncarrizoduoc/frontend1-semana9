import { useState } from "react";

function Header({cart}) {
    // Se usa useState para controlar la expansion o colapso de la barra de navegacion en pantallas pequeñas
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-primary  p-3">
            <nav className="navbar navbar-expand-lg navbar-dark container my-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">Gamestore</a>
                    <button
                        className="navbar-toggler"
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a id="nav-destacados" className="nav-link" href="#carrusel-destacados">Destacados</a>
                            </li>
                            <li className="nav-item">
                                <a id="nav-novedades" className="nav-link" href="#cuadricula-productos">Novedades</a>
                            </li>
                            <li className="nav-item">
                                <a id="nav-carrito" className="nav-link" href="#carrito">Mi carrito</a>
                            </li>
                            <li className="nav-item">
                                <a id="nav-contactanos" className="nav-link" href="#formulario-contacto">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                    <a href="carrito.html" className="position-relative d-flex align-items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-cart d-block"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                        <span id="badge-carrito" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {/*Mostrar numero de productos en el carrito usando un badge*/ }
                            {cart.length}
                            <span className="visually-hidden">Elementos en el carrito</span>
                        </span>
                    </a>
                </div>
            </nav>
            <form id="form-busqueda" novalidate method="get" className="container col">
                <div className="d-flex align-items-center">
                    <input type="text" className="form-control" id="busqueda" name="busqueda" placeholder="Busca en la tienda" maxLength={100} />
                    <button type="submit" className="btn btn-dark">Buscar</button>
                    <div className="invalid-feedback text-white px-4">Debe introducir un término de búsqueda (no puede superar los 100 caracteres)</div>
                </div>
            </form>
        </header>
    )
}

export default Header