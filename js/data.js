// ============================================================
// LUMINA LABSTECH — Content Data
// Edit this file to add/update articles, papers, collaborators
// ============================================================

const DATA = {

  // ── Divulgation Articles ───────────────────────────────────
  articles: [
    {
      id: "digitalizacion-del-self",
      title: "La inevitable digitalización del Self",
      excerpt: "Cómo la era digital está reconfigurando quiénes somos — y por qué eso no es tan nuevo como parece. Una perspectiva desde la neurobiología y la teoría evolutiva.",
      category: "Consciencia",
      tag: "teal",
      readTime: "10–12 min",
      date: "2025-05-20",
      dateLabel: "Mayo 2025",
      featured: true,
      featuredQuote: "La consciencia no es lo que el cerebro produce: es el canal a través del cual el Self se comunica con la realidad física que lo sostiene.",
      author: { name: "Luis Francisco Pardo Pera", initials: "LP", avatar: "" },
      url: "articulos/digitalizacion-del-self.html",
      keywords: ["self", "neurobiología", "tecnología", "consciencia", "Damasio"],
    },
    {
      id: "del-dato-al-sentido",
      title: "Del dato al sentido: IA explicable en la educación superior",
      excerpt: "Los sistemas predictivos generan scores de riesgo con alta precisión estadística, pero rara vez desencadenan intervenciones pedagógicas efectivas. ¿Por qué?",
      category: "IA Educativa",
      tag: "blue",
      readTime: "8 min",
      date: "2025-04-10",
      dateLabel: "Abril 2025",
      featured: false,
      author: { name: "Luis Francisco Pardo Pera", initials: "LP", avatar: "" },
      url: "articulos/del-dato-al-sentido.html",
      keywords: ["IA", "educación", "abandono escolar", "XAI", "SIP"],
    },
    {
      id: "consciencia-como-canal",
      title: "La consciencia como canal: una hipótesis de trabajo",
      excerpt: "¿Y si la consciencia no fuera lo que el cerebro produce, sino el medio a través del cual el Self se comunica con la realidad física? Una propuesta especulativa fundamentada.",
      category: "Consciencia",
      tag: "teal",
      readTime: "9 min",
      date: "2025-03-15",
      dateLabel: "Marzo 2025",
      featured: false,
      author: { name: "Luis Francisco Pardo Pera", initials: "LP", avatar: "" },
      url: "articulos/consciencia-como-canal.html",
      keywords: ["consciencia", "Self", "filosofía", "neurociencia", "IIT"],
    },
    {
      id: "cuerpo-maquina-evolucion",
      title: "Cuerpo, máquina y evolución: el nicho triádico de Iriki",
      excerpt: "Desde el rastrillo del mono hasta el smartphone: el cerebro humano ha incorporado herramientas a su mapa corporal durante 40,000 años. La era digital es la siguiente fase.",
      category: "Evolución",
      tag: "warm",
      readTime: "7 min",
      date: "2025-02-01",
      dateLabel: "Febrero 2025",
      featured: false,
      author: { name: "Luis Francisco Pardo Pera", initials: "LP", avatar: "" },
      url: "articulos/cuerpo-maquina-evolucion.html",
      keywords: ["Iriki", "evolución", "cognición extendida", "herramientas", "neuroplasticidad"],
    },
    {
      id: "atenea-ai-presentacion",
      title: "Atenea AI: cuando el algoritmo aprende a escuchar al orientador",
      excerpt: "Una introducción accesible al Sistema Instrumental Psicotécnico (SIP) y al Ciclo CIR: cómo un sistema de detección temprana puede transformarse en instrumento pedagógico.",
      category: "IA Educativa",
      tag: "blue",
      readTime: "11 min",
      date: "2025-01-20",
      dateLabel: "Enero 2025",
      featured: false,
      author: { name: "Luis Francisco Pardo Pera", initials: "LP", avatar: "" },
      url: "articulos/atenea-ai-presentacion.html",
      keywords: ["Atenea AI", "SIP", "abandono escolar", "machine learning", "orientación"],
    },
  ],

  // ── Scientific Papers ──────────────────────────────────────
  papers: [
    {
      id: "sip-genesis-instrumental",
      title: "El Sistema Instrumental Psicotécnico (SIP): una categoría tecnocientífica para el diseño de sistemas de IA como instrumentos de mediación pedagógica",
      journal: "En revisión — Revista Electrónica de Investigación Educativa (REDIE)",
      year: "2025",
      authors: "Pardo Pera, L. F.",
      doi: "",
      url: "",
      type: "article",
      tags: ["SIP", "Génesis instrumental", "IA Educativa", "IBD"],
      abstract: "Se propone el SIP como categoría analítica que integra la teoría de la génesis instrumental (Rabardel y Béguin, 2000) con el diseño de sistemas de inteligencia artificial para la mediación pedagógica en la educación superior.",
      status: "review",
    },
    {
      id: "atenea-ai-ibd",
      title: "Atenea AI: diseño e implementación de un sistema de detección temprana del abandono escolar mediante stacking ensemble y XAI bajo el paradigma IBD",
      journal: "En preparación — Computers & Education: Artificial Intelligence",
      year: "2025",
      authors: "Pardo Pera, L. F.",
      doi: "",
      url: "",
      type: "article",
      tags: ["Stacking ensemble", "SHAP", "Abandono escolar", "IBD", "UAQ"],
      abstract: "Reporte del diseño e implementación de Atenea AI en dos ciclos IBD, incluyendo arquitectura del modelo (AUC-ROC 98.5%), validación con datos sintéticos y análisis de la Ficha Atenea AI como instrumento de mediación.",
      status: "prep",
    },
  ],

  // ── Collaborators ──────────────────────────────────────────
  collaborators: [
    {
      id: "luis-pardo",
      name: "Luis Francisco Pardo Pera",
      initials: "LP",
      avatar: "",
      role: "Fundador & Editor",
      institution: "Universidad Autónoma de Querétaro",
      country: "México",
      fields: ["Consciencia", "IA Educativa", "Tecnología Educativa"],
      bio: "Doctorante en Tecnología Educativa. Investigador en ciencia de la consciencia y sistemas de IA con perspectiva pedagógica crítica.",
      email: "soulness356@gmail.com",
      orcid: "",
      github: "",
      scholar: "",
      articles: 5,
      papers: 2,
      badge: "editor",
    },
    // ── Add collaborators below this line ──
    // {
    //   id: "unique-id",
    //   name: "Nombre Completo",
    //   initials: "NC",
    //   avatar: "",             // path to image or ""
    //   role: "Investigador",
    //   institution: "Universidad",
    //   country: "País",
    //   fields: ["Campo 1", "Campo 2"],
    //   bio: "Breve descripción.",
    //   email: "",
    //   orcid: "",
    //   github: "",
    //   scholar: "",
    //   articles: 0,
    //   papers: 0,
    //   badge: "",              // "editor" | "reviewer" | ""
    // },
  ],

  // ── Site Config ────────────────────────────────────────────
  config: {
    siteName:    "Lumina Labstech",
    tagline:     "Red de Investigación en Tecnología Educativa y Ciencias Cognitivas",
    description: "Espacio de divulgación científica y producción académica en tecnología educativa, ciencia de la consciencia e inteligencia artificial con perspectiva pedagógica crítica.",
    baseUrl:     "https://luminalabstech.github.io",
    email:       "soulness356@gmail.com",
    github:      "luminalabstech",
    foundedYear: "2024",
  }
};
