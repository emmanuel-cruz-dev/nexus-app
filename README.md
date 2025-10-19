# 🧠 Nexus App

**Aplicación Fullstack con Next.js + Prisma + NextAuth**

Nexus es una aplicación diseñada para ayudarte a **organizar tus ideas, tareas y notas personales** en un solo lugar.  
Permite registrarse, iniciar sesión y gestionar contenido de texto de forma rápida y segura, con una interfaz moderna basada en **Radix UI** y **Tailwind CSS**.

---

## 🚀 Tecnologías utilizadas

- **Next.js 15** — Framework React fullstack  
- **NextAuth** — Autenticación segura de usuarios  
- **Prisma ORM** — Conexión y manejo de base de datos  
- **Radix UI + Tailwind CSS** — Interfaz accesible y personalizable  
- **React Hook Form** — Manejo eficiente de formularios  
- **Axios** — Comunicación con el backend  
- **Sonner** — Notificaciones elegantes  
- **bcrypt** — Hashing de contraseñas

---

## ⚙️ Instalación

Cloná el repositorio e instalá las dependencias:

```bash
git clone https://github.com/<tu-usuario>/nexus-app.git
cd nexus-app
npm install
````

Configurá las variables de entorno (por ejemplo, `.env.local`):

```bash
DATABASE_URL="tu_url_de_base_de_datos"
NEXTAUTH_SECRET="clave_segura"
NEXTAUTH_URL="http://localhost:3000"
```

Ejecutá el servidor de desarrollo:

```bash
npm run dev
```

---

## 🧩 Funcionalidades principales (MVP)

* Registro y login de usuarios
* Crear, editar y eliminar notas o tareas
* Organizar contenido por etiquetas o listas
* Interfaz responsive con tema claro/oscuro
* Notificaciones visuales para acciones del usuario
