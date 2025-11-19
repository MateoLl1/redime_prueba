# 🚀 Sistema de Gestión de Materiales y Categorías

### FullStack — Laravel 12 (Backend) + React 18 + TypeScript + Bootstrap (Frontend)

Este proyecto es una aplicación FullStack que implementa un CRUD completo de **Materiales** y **Categorías**, diseñada como una prueba técnica profesional.

Incluye:

- Backend API REST en **Laravel 12**
- Frontend moderno con **React 18 + TypeScript**
- Estilo profesional con **Bootstrap 5**
- Modales flotantes para crear/editar
- Paginación en backend y frontend
- Arquitectura limpia y escalable

---

# 📂 Estructura del Proyecto

```
/api        → Proyecto Laravel (Backend)
/app        → Proyecto React + Vite + TS (Frontend)
```

Ambos proyectos funcionan de forma independiente pero están integrados entre sí.

---

# 🟦 Backend – Laravel 12

El backend expone una API REST con:

- **CRUD de Categorías**
- **CRUD de Materiales**
- **Relación Category → Materials**
- **API Resources (transformación limpia de JSON)**
- **Paginación estandarizada**
- **Seeders incluidos**

## ▶️ Ejecución del Backend

```bash
cd api
composer install
cp .env.example .env
php artisan migrate --seed
php artisan serve
```

El backend queda disponible en:

```
http://127.0.0.1:8000/api
```

### Endpoints principales

```
GET    /api/categories
POST   /api/categories

GET    /api/materials
POST   /api/materials
PUT    /api/materials/{id}
DELETE /api/materials/{id}
```

---

# 🟩 Frontend – React + TypeScript + Bootstrap

El frontend consume la API del backend e incluye:

- Dos secciones con tabs: **Materiales** y **Categorías**
- Tablas limpias con Bootstrap
- Modales flotantes para crear/editar
- Select de categorías en materiales
- Paginación centrada
- Hooks personalizados para data-fetching
- Arquitectura mantenible

## ▶️ Ejecución del Frontend

```bash
cd app
npm install
npm run dev
```

Se abrirá en:

```
http://localhost:5173
```

---

# 🔗 Integración Backend ↔ Frontend

El archivo `app/src/api/axios.ts` define la URL base:

```ts
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});
```

La comunicación usa **Axios** y endpoints REST.

---

# 🧩 Tecnologías Utilizadas

### Backend

- Laravel 12
- PHP 8.3
- Eloquent ORM
- API Resources
- MySQL
- Seeders y Migraciones

### Frontend

- React 18
- TypeScript
- Vite
- Axios
- Bootstrap 5
- React-Bootstrap
- Hooks personalizados

---

# 📦 Características Principales

- CRUD de materiales y categorías
- Interfaz moderna y responsive
- Modales para mejorar UX
- Código escalable y limpio
- Paginación completa en ambos lados
- API REST bien estructurada
- Separación clara de capas (backend / frontend)

---

# 🧑‍💻 Autor

**Mateo Ll**

---

# ⭐ Nota Final

Este proyecto demuestra:

- Buen dominio de Laravel moderno
- Buen manejo de React + TypeScript
- Arquitectura limpia
- Gestión correcta de API REST
- Dominio de UX con modales y paginación
- Proyecto listo para producción
