import ProductCard from "./ProductCard";
import ProductFilterCategory from "./ProductFilterCategory";
import { useState } from 'react'

function Productos({
        productos, 
        cart, 
        addToCart, 
        removeFromCart, 
        categorias
    }) {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

    return (
        <section id="cuadricula-productos" className="bg-white py-4">
            <div className="container text-center">
                <h3 className="text-start fw-light mb-5">Novedades populares</h3>
                <ProductFilterCategory 
                    categorias={categorias} 
                    setCategoriaSeleccionada={setCategoriaSeleccionada}
                />
                <div id="container-productos" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-3">
                    {productos.map((producto) => (
                        ((categoriaSeleccionada === "Todas" || categoriaSeleccionada === producto.categoria) &&
                            <ProductCard
                                key={producto.sku}
                                producto={producto}
                                enElCarrito={cart.some((item) => item.sku === producto.sku)}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />
                        )
                    ))}
                </div>
                <a type="button" className="btn btn-dark text-light my-2" href="#">Explorar todos los productos</a>
            </div>
        </section>
    )
}

export default Productos