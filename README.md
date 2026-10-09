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

Los datos productos se cargan dinámicamente desde un archivo JSON y se renderizan en tarjetas (Cards) usando componentes Bootstrap. Para cada producto se incluye una imagen, precio (normal y oferta), título, descripción y botones para ir a la página de producto y agregar al carrito.


