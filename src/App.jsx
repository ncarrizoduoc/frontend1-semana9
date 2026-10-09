import { useEffect, useState } from 'react'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Carrusel from './components/Carrusel'
import Productos from './components/Products'
import Carrito from './components/Carrito'
import ContactForm from './components/ContactForm'

const STORAGE_KEY = 'gamestore-carrito';
const SOURCE_PRODUCTOS = `${import.meta.env.BASE_URL}data/productos.json`;

function loadCart() {
  try {
    const carrito_productos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(carrito_productos) ? carrito_productos : [];
  } catch {
    return [];
  };
}

function App() {

  const [cart, setCart] = useState(loadCart());
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [categorias, setCategorias] = useState([]);

  // Guardar carrito en LocalStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart])

  // Agregar producto al carrito
  const addToCart = (product) => {
    if (!cart.some(item => item.sku === product.sku)) {
      const cartItem = {
        ...product, // Copia del producto
        itemId: product.sku, //Asignar SKU como ID del producto en el carrito
      };

      setCart((currentCart) => [...currentCart, cartItem]);
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (productoId) => {
    setCart((currentCart) => currentCart.filter(item => item.sku !== productoId))
  }

  useEffect(() => {
    // Cargar productos desde el archivo JSON
    fetch(SOURCE_PRODUCTOS)
      .then(response => response.json())
      .then(data => {
        // Guardar productos
        setProductos(data);
        // Extraer categorías únicas de los productos para crear filtro
        const categoriasUnicas = [...new Set(data.map(product => product.categoria))];
        setCategorias(categoriasUnicas);
        // Actualizar estado de carga de datos de productos
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
        setError(error.message);
        setCargando(false);
      });
  }, []);


  return (
    <>
      <Header cart={cart} />
      <main>
        <Hero />
        <Carrusel />

        {/* Mostrar mensaje mientras se cargan los productos */}
        {cargando && !error && (
          <p className="text-center">Cargando productos...</p>
        )}
        {/* Mostrar mensaje de error si falla la carga de productos */}
        {error && (
          <p className="text-danger text-center">Error al cargar los productos: {error}</p>
        )}
        {/* Mostrar productos si se cargaron correctamente */}
        {!error && !cargando && (
          <Productos
            productos={productos}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            categorias={categorias}
          />
        )}
        <Carrito cart={cart} removeFromCart={removeFromCart} />
        <ContactForm/>

      </main>
      <Footer />
    </>
  )
}

export default App
