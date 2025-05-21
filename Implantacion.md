
# 📑 Implantación y Documentación — NutriFit Backend

## 📌 Manual de Instalación y Modo de Implantación

### Descripción del Proyecto

NutriFit es una aplicación web orientada a la gestión de nutrición, dietas personalizadas y seguimiento de hábitos saludables. El backend de la aplicación está desarrollado con **Strapi**, un headless CMS basado en Node.js, que permite la gestión de los recursos de la aplicación mediante una API REST.

### Entorno de Desarrollo

- **Lenguaje:** TypeScript  
- **Backend:** Strapi v4  
- **Base de Datos:** MySQL (PlanetScale)  
- **Plataforma de Hosting:** Render.com (para Strapi)  
- **Gestión de dependencias:** npm  
- **Sistema de control de versiones:** Git (GitHub)  
- **Frontend:** Next.js (desplegado en Vercel)

### Requisitos Previos

- Node.js v16.x o superior  
- npm v9.x o superior  
- MySQL remoto (PlanetScale) o local  
- Git instalado  
- Cuenta en Render.com para despliegue

### Instalación Local del Backend

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/nutrifit-backend.git
   cd nutrifit-backend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crear un archivo `.env` con el siguiente contenido:

   ```
   DATABASE_CLIENT=mysql
   DATABASE_HOST=XXXXXX
   DATABASE_PORT=3306
   DATABASE_NAME=nutrifitDB
   DATABASE_USERNAME=javier
   DATABASE_PASSWORD=javier
   JWT_SECRET=XXXXXX
   ```

4. **Ejecutar Strapi**
   ```bash
   npm run develop
   ```

5. **Acceder a la administración**
   - URL: `http://localhost:1337/admin`
   - Crear el primer usuario administrador desde la pantalla inicial.

### Despliegue en Render.com

1. Crear cuenta en **Render.com**
2. Crear nuevo servicio de Web Service  
3. Conectar repositorio GitHub privado  
4. Configurar las variables de entorno desde Render Dashboard  
5. Configurar plan Free o Starter  
6. Añadir los siguientes comandos:
   - Build command: `npm install && npm run build`
   - Start command: `npm run start`
7. Deploy

**Nota:** Render asignará una URL pública al backend.

## 📌 Manual de Usuario (Backend)

### Acceso al Panel de Administración

1. [Acceder a la URL proporcionada por Render](`https://nutrifit-p0z5.onrender.com`)
2. Iniciar sesión .

### Gestión de Usuarios

- Crear, editar o eliminar usuarios desde la sección **Usuarios**
- Cambiar roles y permisos según los perfiles de la aplicación (admin, user)

### Gestión de Contenidos

- Crear y modificar recursos: alimentos, rutinas, ejercicios, perfiles, etc.
- Subir imágenes o archivos multimedia desde la biblioteca.

### Gestión de Solicitudes API

- Verificar peticiones desde el endpoint `/api`
- Probar endpoints usando Postman o Insomnia con token JWT válido.

---

## 📌 Documentación de Ayuda Integrada

La aplicación cuenta con:
- **Documentación API integrada en Strapi:** accesible desde `/admin` y documentación Swagger desde `/documentation` (si está habilitada)
- **Sistema de roles y permisos** personalizable desde la interfaz gráfica.
- Mensajes de error descriptivos en cada sección.
- Manuales y documentación disponible en el repositorio privado.