
# Frontend - Wishlist App

Este proyecto es el frontend de la aplicación Wishlist, que permite a los usuarios explorar productos, agregarlos a su lista de deseos, y manejarlos. El frontend está construido con **React** e **Ionic** para una experiencia de usuario moderna y responsive.

## Requisitos

Asegúrate de tener instaladas las siguientes herramientas antes de empezar:

- **Node.js**: El proyecto utiliza Node.js para la ejecución de scripts y para instalar dependencias.
- **npm o yarn**: Gestores de paquetes para instalar las dependencias del proyecto.
- **Ionic CLI**: Herramienta para trabajar con proyectos Ionic.

## Tecnologías utilizadas

- **React**: Librería principal para construir la interfaz de usuario.
- **Ionic Framework**: Framework UI para construir aplicaciones móviles y web responsive.
- **Axios**: Para manejar las peticiones HTTP al backend.
- **Context API**: Para manejar el estado global de la aplicación (autenticación y wishlist).

## Dependencias principales

- `react`
- `@ionic/react`
- `axios`

## Configuración del proyecto

### 1. Clonar el repositorio

Clona el repositorio del proyecto en tu máquina local.

### 2. Instalar dependencias

Una vez clonado el repositorio, navega hasta la carpeta del proyecto y ejecuta el gestor de paquetes (npm o yarn) para instalar las dependencias.

### 3. Configurar las variables de entorno

Este proyecto se comunica con un backend. Asegúrate de configurar la URL del backend en el archivo `.env`.

Ejemplo del archivo `.env`:

```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### 4. Ejecutar el proyecto

Una vez configurado todo, puedes ejecutar el proyecto para desarrollo. El servidor de desarrollo estará disponible en `http://localhost:3000/`.

### 5. Estructura del proyecto

- **src/components**: Contiene los componentes de la aplicación como ProductCard, HeaderBar, etc.
- **src/context**: Maneja el estado global de la aplicación, incluyendo autenticación y wishlist.
- **src/services**: Contiene las funciones para interactuar con el backend (servicios de autenticación y wishlist).
- **src/pages**: Contiene las páginas principales del proyecto, como la página de login, registro, y la vista principal de productos.

### 6. Funcionalidades principales

- **Autenticación de usuarios**: Los usuarios pueden iniciar sesión o registrarse.
- **Agregar y eliminar productos de la wishlist**: Los usuarios pueden agregar o eliminar productos de su lista de deseos.
- **Filtrado y búsqueda de productos**: Los usuarios pueden filtrar productos por género, categoría o editorial.

### 7. Probar la aplicación

Puedes utilizar **Postman** o el propio navegador para interactuar con la API y probar las funcionalidades del frontend.

### 8. Errores comunes

- **Error de conexión con el backend**: Verifica que la URL en el archivo `.env` apunte correctamente al backend.
- **Problemas de dependencias**: Asegúrate de que todas las dependencias estén instaladas correctamente utilizando `npm install` o `yarn install`.

## Contribuir

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tu funcionalidad o corrección de errores.
3. Haz un pull request a la rama principal del proyecto.

