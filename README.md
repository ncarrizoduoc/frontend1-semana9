# Proyecto de página web para tienda de videojuegos (React + Vite)

El proyecto consiste en una maqueta de página de inicio para una tienda online de videojuegos. El proyecto se desarrolló usando React.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Cómo utilizar

Para ejecutar el proyecto y probar la página generada, se pueden usar dos métodos:
- Acceder a la página publicada en GitHub Pages a través del siguiente enlace: `https://ncarrizoduoc.github.io/frontend1-semana9/`
- Descargar el proyecto y, desde la carpeta raíz, abrir una línea de comandos. Ejecutar los comandos `npm install` (para descargar las dependencias del proyecto) y `npm run dev` para desplegar la página web en un servidor local.

## Funcionalidades principales de la página

### Carga dinámica de productos ###

Los datos productos se cargan dinámicamente desde un archivo JSON local y se renderizan en tarjetas (Cards) usando componentes Bootstrap. Para cada producto se incluye una imagen, precio (normal y oferta), título, descripción y botones para ir a la página de producto y **agregar al carrito**.

Se configuran también un mensaje de error por si la carga de productos falla.

### Filtrado de productos por categoría ###

Usando renderizado condicional, en combinación con Javascript podemos filtrar los productos por categoría, pudiendo visualizar todos los productos, o solo aquellos pertenecientes a la categoría seleccionada. Para ello, se debe seleccionar una categoría y hacer clic en el botón "Filtrar productos".

### Actualización del carrito en tiempo real ###

La página cuenta con un carrito de compras que se actualiza al agregar o eliminar productos del carrito. El carrito incluye un contador de productos en el carrito y cálculo del costo total de los productos. En el **header** de la página, se utiliza un **Badge** para actualizar el número de elementos en el carrito.

### Formulario de contacto ###

Se incluye, al final de la página, un formulario de contacto, que incluye campos para el nombre del solicitante, correo, tipo de solicitud, asunto y descripción. El formulario valida estos campos antes de enviar los datos ingresados. Si los datos no son válidos, se muestra feedback en los respectivos campos.

### Navegación a través del navbar ###

La barra de navegación en la parte superior de la página permite navegar entre las secciones de la página. Para ello se utiliza el atributo **href** de la etiqueta **<a>** para agregar enlaces a los componentes que conforman la página (usando sus ID).