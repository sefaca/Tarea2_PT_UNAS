# Tarea 2 - Consumo de API Externa con React y Node.js

Este proyecto es una aplicación web desarrollada con **React** en el frontend y **Node.js** en el backend que consume una API externa para mostrar productos. El objetivo es simular un sistema de listado de productos donde se pueden buscar artículos por título. Este proyecto forma parte de una prueba técnica.

# Índice

- [Introducción](#introducción)
- [Primeros pasos](#primeros-pasos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías y herramientas utilizadas](#tecnologías-y-herramientas-utilizadas)
- [Configuración del backend](#configuración-del-backend)
- [Configuración del frontend](#configuración-del-frontend)
- [Aprendizaje y desarrollo](#aprendizaje-y-desarrollo)

# Introducción

Este proyecto está diseñado para mostrar una lista de productos obtenida de una API externa (Fake Store API). Permite realizar búsquedas filtrando por el nombre del producto. El proyecto combina un frontend dinámico desarrollado con **React** y un backend con **Node.js** que actúa como proxy para consumir la API externa.

# Primeros pasos

Para poner en marcha el proyecto, sigue estos pasos:

## Paso 1: Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/Tarea2PT.git
```

## Paso 2: Instalar dependencias

Backend

Ve al directorio backend e instala las dependencias de Node.js:

```bash
cd Tarea2_PT_UNAS-main/backend
npm install
```

Frontend

Ahora, navega al directorio del frontend e instala las dependencias de React:

```bash
cd Tarea2_PT_UNAS-main
npm install
```

## Paso 3: Ejecutar el backend

Una vez instaladas las dependencias, inicia el servidor backend. Este servidor actuará como intermediario entre el frontend y la API de productos:

```bash
cd Tarea2_PT_UNAS-main/backend
node server.js
```

El backend estará escuchando en http://localhost:5000.

## Paso 4: Ejecutar el frontend

Con el backend en marcha, ahora puedes ejecutar la aplicación React:

```bash
cd Tarea2_PT_UNAS-main
npm start
```

La aplicación estará disponible en http://localhost:3000.

# Estructura del proyecto

El proyecto está organizado en dos carpetas principales:

- backend/: Contiene el código del servidor Node.js que actúa como proxy para consumir la API externa.
- frontend/: Contiene el código de la aplicación React que maneja la interfaz de usuario.

## Backend

- server.js: Configuración del servidor Express y las rutas para consumir la API de productos.
- package.json: Lista de dependencias y scripts del backend (Node.js y Express).

## Frontend

- src/components/: Contiene los componentes principales, como ProductList para listar los productos.
- src/components/viewmodel.ts: Lógica central para la obtención y filtrado de productos.
- src/App.js: Punto de entrada principal de la aplicación React.
- package.json: Lista de dependencias y scripts del frontend (React y Axios).

# Tecnologías y herramientas utilizadas

## Backend

- Node.js: El entorno de ejecución de JavaScript utilizado para construir el servidor backend.
- Express: Framework para manejar las rutas y peticiones HTTP en el servidor.
- Axios: Cliente HTTP utilizado para hacer peticiones a la API externa desde el servidor Node.js.

## Frontend

- React: Biblioteca de JavaScript utilizada para construir la interfaz de usuario.
- Axios: Cliente HTTP utilizado para hacer peticiones al backend.
- CSS: Utilizado para darle estilo a la interfaz de usuario.

# Configuración del backend

El backend está basado en Node.js y utiliza Express para manejar las solicitudes. Se conecta a la API externa de productos, la cual está disponible en https://fakestoreapi.com/products. Para ejecutar el servidor backend:

- Navega a la carpeta backend.
- Ejecuta el comando:

```bash
node server.js
```

El servidor estará escuchando en http://localhost:5000, y puedes hacer peticiones a http://localhost:5000/api/products para obtener los productos.

# Configuración del frontend

El frontend está basado en React y se conecta al servidor backend para obtener los productos. Para iniciar el frontend:

- Navega a la carpeta frontend.
- Ejecuta el comando:

```bash
npm start
```

La aplicación estará corriendo en http://localhost:3000 y mostrará una lista de productos con opciones de búsqueda.

# Aprendizaje y desarrollo

Este proyecto fue una gran oportunidad para aplicar conceptos fundamentales de desarrollo web utilizando tanto tecnologías frontend como backend. Algunos puntos clave del aprendizaje incluyen:

- Manejo de APIs externas: Uso de Axios tanto en el frontend como en el backend para realizar peticiones HTTP a APIs externas.
- Separación de lógica de presentación y lógica de negocio: Se implementó la lógica de obtención de datos en un hook personalizado (viewmodel.ts) para mejorar la organización del código.
- Creación de un backend simple con Node.js: Implementación de un servidor Express que actúa como intermediario entre el frontend y la API externa, lo que facilita la integración.
- Estilo y diseño: Aplicación de estilos CSS para mejorar la presentación de la lista de productos.

Este proyecto es un buen punto de partida para expandir funcionalidades, como la posibilidad de agregar, actualizar o eliminar productos si la API lo permitiera.
