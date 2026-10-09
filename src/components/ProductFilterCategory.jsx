import ProductCategoryRadio from "./ProductCategoryRadio";
import { useState } from "react";

function ProductFilterCategory({ categorias, setCategoriaSeleccionada }) {
    const [seleccionParcial, setSeleccionParcial] = useState("Todas");

    // Cambiar radio seleccionado con categoria del producto
    const handleChange = (event) => {
        setSeleccionParcial(event.target.value);
    };

    // Aplicar categoria seleccionada y filtrar productos
    const handleSubmit = (event) => {
        event.preventDefault();
        setCategoriaSeleccionada(seleccionParcial);
    };

    return (
        <form onSubmit={handleSubmit} id="filtro-categorias" className="border border-2 border-secondary rounded-4 bg-light my-3 py-2">
            <h4 className="text-center fw-light text-muted mb-2">Filtrar por categoría</h4>
            <div className="form-check form-check-inline d-flex flex-wrap justify-content-center gap-3 my-3">
                <ProductCategoryRadio
                    categoria="Todas las categorías"
                    value="Todas"
                    checked={seleccionParcial === "Todas"}
                    onChange={handleChange}
                />

                {categorias.map((categoria) => (
                    <ProductCategoryRadio
                        key={categoria}
                        categoria={categoria}
                        value={categoria}
                        checked={seleccionParcial === categoria}
                        onChange={handleChange}
                    />
                ))}
            </div>

            <button type="submit" className="btn btn-primary text-light">
                Filtrar productos
            </button>
        </form>
    );
}

export default ProductFilterCategory;