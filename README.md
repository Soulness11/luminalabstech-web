# Lumina Labstech — Sitio Web

Red de Investigación en Tecnología Educativa y Ciencias Cognitivas.

## Estructura

```
luminalabstech-web/
├── index.html              Página principal
├── articulos.html          Artículos de divulgación
├── publicaciones.html      Publicaciones científicas
├── colaboradores.html      Perfiles de investigadores
├── css/
│   └── style.css           Estilos completos + dark mode + responsive
├── js/
│   ├── data.js             ← EDITA AQUÍ para agregar contenido
│   └── main.js             Lógica: render, filtros, búsqueda, tema
└── articulos/              Páginas individuales de artículos
```

## Cómo agregar contenido

### Nuevo artículo de divulgación
Edita `js/data.js` → array `articles` → agrega un objeto nuevo.

### Nueva publicación científica
Edita `js/data.js` → array `papers` → agrega un objeto nuevo.

### Nuevo colaborador
Edita `js/data.js` → array `collaborators` → agrega un objeto nuevo.

## Deploy en GitHub Pages

```bash
git init
git add .
git commit -m "Lumina Labstech — sitio inicial"
git remote add origin https://github.com/TU_USUARIO/luminalabstech-web.git
git push -u origin main
```

En GitHub → Settings → Pages → Source: `main` / `/ (root)`.

URL final: `https://TU_USUARIO.github.io/luminalabstech-web/`

## Tecnologías

- HTML5 semántico
- CSS custom properties + dark mode nativo
- JS vanilla (sin frameworks)
- Google Fonts: DM Serif Display + Inter + JetBrains Mono
