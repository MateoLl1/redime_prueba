# 🚀 Frontend – React + TypeScript + Bootstrap

Aplicación frontend desarrollada en:

- React 18
- TypeScript
- Bootstrap 5
- Axios
- Hooks personalizados
- CRUD de Materiales y Categorías
- Modales para crear/editar
- Paginación centrada
- UI limpia y profesional

---

## 📦 Requisitos

- Node.js 16+
- npm o yarn

---

## ⚙️ Instalación

```bash
npm install
# o
yarn install
```

---

## ▶️ Ejecutar el proyecto

```bash
npm run dev
# o
yarn dev
```

Abrir en:

```
http://localhost:5173
```

---

## 🔌 Conexión con el Backend

El backend debe correr en:

```
http://127.0.0.1:8000/api
```

Configurado en:

```
src/api/axios.ts
```

```ts
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});
```

---

## 🧩 Estructura del proyecto

```
src/
│
├── api/            # Servicios HTTP
├── components/     # Tablas, modales, paginación
├── hooks/          # Lógica CRUD
├── types/          # Tipos TS
└── App.tsx         # UI principal
```

---

## 📚 Funcionalidades

- CRUD de Materiales
- CRUD de Categorías
- Paginación
- Modales para crear/editar
- Tabs para cambiar sección
- Bootstrap UI

---

## 👤 Autor

Mateo Ll
