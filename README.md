# ⚡ AdonisJS Clean Starter — Tailwind CSS + HeroUI + Framer Motion

![AdonisJS](https://img.shields.io/badge/AdonisJS-v6-5A45FF?style=for-the-badge&logo=adonisjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HeroUI](https://img.shields.io/badge/HeroUI-000000?style=for-the-badge&logo=nextui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**AdonisJSClean** es una plantilla de inicio rápida y limpia (*clean starter*) pensada para comenzar proyectos web modernos con **AdonisJS (TypeScript)** sin perder tiempo en la configuración inicial del entorno frontend.

Incluye de fábrica un stack visual moderno y optimizado con **Vite**:
- **[AdonisJS](https://adonisjs.com/):** Framework backend robusto para Node.js con TypeScript.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de estilos utilitarios para un desarrollo visual rápido y responsive.
- **[HeroUI](https://www.heroui.com/):** Biblioteca de componentes UI accesibles, personalizables y modernos (anteriormente NextUI).
- **[Framer Motion](https://www.framer.com/motion/):** Librería para animaciones fluidas y transiciones interactivas en la interfaz.

---

## 🚀 Requisitos Previos

Para ejecutar este proyecto localmente, asegúrate de tener instalado en tu entorno:

- **Node.js**: `>= 24.0.0` o superior (se recomienda la última versión LTS).
- **Gestor de paquetes**: `npm`, `pnpm`, `yarn` o `bun`.
- **Git**: Para clonar el repositorio.

---

## 🛠️ Instalación y Puesta en Marcha

Sigue estos pasos para inicializar el proyecto en tu máquina local:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/Yorest/AdonisJSClean.git](https://github.com/Yorest/AdonisJSClean.git)
cd AdonisJSClean
```

### Instalar las dependencias
```bash
npm install
# o con tu gestor preferido:
# pnpm install
# yarn install
```

### 3. Configurar las variables de entorno

```bash
cp .env.example .env
```

### 4. Generar la clave de seguridad de la aplicación
AdonisJS requiere una clave criptográfica para firmar cookies y sesiones:

```bsh
node ace generate:key
```
(Opcional) Si tu proyecto utiliza base de datos local desde el inicio, ejecuta las migraciones:

```bsh
node ace migration:run
```

### 5. Iniciar el servidor en modo desarrollo

```bash
npm run dev
# o usando Ace CLI:
# node ace serve --hmr
```

Abre tu navegador en: http://localhost:3333

📂 Estructura Principal del Proyecto
AdonisJSClean/
├── app/                  # Controladores, Modelos, Validadores y lógica de AdonisJS
├── config/               # Archivos de configuración de Adonis, base de datos y vistas
├── public/               # Archivos estáticos públicos (imágenes, favicons, fuentes)
├── resources/            # Activos del Frontend
│   ├── css/              # Configuración y directivas de Tailwind CSS
│   ├── js/               # Punto de entrada de scripts, HeroUI y Framer Motion
│   └── views/            # Plantillas Edge / HTML principal
├── start/                # Definición de rutas (routes.ts) y configuración global
├── tailwind.config.js    # Configuración de Tailwind CSS y plugins de HeroUI
├── vite.config.ts        # Configuración de Vite para integración con AdonisJS
├── .env.example          # Plantilla de variables de entorno
└── package.json          # Dependencias y scripts de ejecución

⚡ Comandos Útiles de Desarrollo

```bash
# Servidor de desarrollo con recarga en tiempo real (Backend + Frontend Vite)
npm run dev

# Construir la aplicación para producción (compila TypeScript y activos Vite)
npm run build

# Iniciar la aplicación en modo producción (requiere build previo)
npm run start

# Comprobar errores estáticos de tipos con TypeScript
npm run typecheck

# Ejecutar las pruebas automáticas con Japa
node ace test
```

📄 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT. Úsalo libremente como base para tus proyectos web.
