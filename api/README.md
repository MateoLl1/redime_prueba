# 🚀 Backend API – Laravel 12

Este proyecto contiene el backend desarrollado en **Laravel 12**, utilizando:

-   Eloquent ORM
-   API Resources
-   Controladores REST
-   Paginación
-   Seeders
-   Relación Materiales ↔ Categorías

---

## 📦 Requisitos

-   PHP 8.3+
-   Composer
-   MySQL
-   Extensiones: BCMath, Ctype, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML

---

## ⚙️ Instalación

```bash
composer install
```

---

## 🔧 Configurar `.env`

Duplicar archivo:

```bash
cp .env.example .env
```

Editar:

```
DB_DATABASE=redime_prueba
DB_USERNAME=root
DB_PASSWORD=tu_clave
```

---

## 🗄️ Migraciones + Seeders

```bash
php artisan migrate --seed
```

Esto creará tablas y datos iniciales.

---

## ▶️ Ejecutar servidor

```bash
php artisan serve
```

API disponible en:

```
http://127.0.0.1:8000/api
```

---

## 📡 Endpoints

### Categorías

```
GET    /api/categories
POST   /api/categories
```

### Materiales

```
GET    /api/materials
POST   /api/materials
PUT    /api/materials/{id}
DELETE /api/materials/{id}
```

---

## 📚 Tecnologías usadas

-   Laravel 12
-   MySQL
-   Eloquent
-   API Resources

---

## 👤 Autor

Mateo Ll
