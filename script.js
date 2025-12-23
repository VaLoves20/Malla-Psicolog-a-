
/* =========================
   MENSAJES MOTIVACIONALES
========================= */
const mensajes = [
  "✨ 'You shine brighter than anyone' – BTS",
  "💜 'Dream, though your beginnings may be humble' – BTS",
  "🌷 'Believe in yourself, your future is yours' – ENHYPEN",
  "💫 'Every step you take matters' – ENHYPEN",
  "🌸 'You were born to be real, not perfect' – BTS"
];

document.getElementById("mensajeMotivacional").innerText =
  mensajes[Math.floor(Math.random() * mensajes.length)];

/* =========================
   MALLA COMPLETA
========================= */
const mallaData = {
  "Semestre 1": [
    "Comunicación Efectiva",
    "Introducción a la Investigación Científica",
    "Raíces Históricas de la Psicología",
    "Procesos Psicológicos Básicos",
    "Psicología del Desarrollo I",
    "Biología Humana",
    "Principios de la Naturaleza"
  ],

  "Semestre 2": [
    "Metodología Cualitativa de la Investigación",
    "Historia de la Psicología",
    "Introducción a la Psicopatología",
    "Psicología del Desarrollo II",
    "Psicofisiología",
    "Principios del Viviente",
    "Inglés I"
  ],

  "Semestre 3": [
    "Metodología Cuantitativa de la Investigación I",
    "Psicopatología Adultos",
    "Psicopatología Infantil I",
    "Psicología del Desarrollo III",
    "Taller de Autoconocimiento",
    "Procesos Neuropsicológicos",
    "Teoría Humanista",
    "Antropología Filosófica",
    "Inglés II"
  ],

  "Semestre 4": [
    "Metodología Cuantitativa de la Investigación II",
    "Teoría Sistémica",
    "Teoría Cognitiva Conductual",
    "Psicopatología Infantil II",
    "Teoría Psicoanalítica",
    "Mentoría I",
    "Neuropsicología y Patología",
    "Afectividad Humana",
    "Apreciación de los Lenguajes Artísticos",
    "Inglés III"
  ],

  "Semestre 5": [
    "Evaluación de Procesos Cognitivos",
    "Psicodiagnóstico Infanto-Juvenil",
    "Psicología Educacional I",
    "Psicología Organizacional I",
    "Mentoría II",
    "Estructura de la Subjetividad",
    "Persona y Trascendencia",
    "Teorías de la Personalidad"
  ],

  "Semestre 6": [
    "Evaluación de la Personalidad",
    "Entrevista Clínica Adultos",
    "Psicología Educacional II",
    "Psicología Organizacional II",
    "Taller: La Persona del Psicólogo",
    "Psicofarmacología",
    "Electivo Línea Clínica",
    "Ética General"
  ],

  "Semestre 7": [
    "Estrategias Psicoterapéuticas Cognitivo Conductuales",
    "Estrategias Psicoterapéuticas Sistémicas",
    "Estrategias Psicoterapéuticas Psicoanalíticas",
    "Psicopatología y Mal Moral",
    "Electivo Especialidad I",
    "Desarrollo de Proyectos de Investigación"
  ],

  "Semestre 8": [
    "Estrategias Psicoterapéuticas Infanto-Juvenil",
    "Estrategias Psicoterapéuticas Humanistas",
    "Seminario de Texto",
    "Seminario de Integración Clínica",
    "Ser Familiar",
    "Electivo Especialidad II"
  ],

  "Semestre 9": [
    "Práctica Clínica"
  ],

  "Semestre 10": [
    "Práctica Clínica Avanzada"
  ]
};

/* =========================
   REQUISITOS
========================= */
const requisitos = {
  "Metodología Cualitativa de la Investigación": ["Introducción a la Investigación Científica"],
  "Historia de la Psicología": ["Raíces Históricas de la Psicología"],
  "Introducción a la Psicopatología": ["Procesos Psicológicos Básicos"],
  "Psicología del Desarrollo II": ["Psicología del Desarrollo I"],
  "Psicofisiología": ["Biología Humana"],
  "Principios del Viviente": ["Principios de la Naturaleza"],
  "Metodología Cuantitativa de la Investigación I": ["Metodología Cualitativa de la Investigación"],
  "Psicopatología Adultos": ["Introducción a la Psicopatología"],
  "Psicopatología Infantil I": ["Psicología del Desarrollo II"],
  "Procesos Neuropsicológicos": ["Psicofisiología"],
  "Inglés II": ["Inglés I"],
  "Metodología Cuantitativa de la Investigación II": ["Metodología Cuantitativa de la Investigación I"],
  "Psicopatología Infantil II": ["Psicopatología Infantil I"],
  "Mentoría I": ["Taller de Autoconocimiento"],
  "Neuropsicología y Patología": ["Procesos Neuropsicológicos"],
  "Afectividad Humana": ["Antropología Filosófica"],
  "Inglés III": ["Inglés II"],
  "Psicodiagnóstico Infanto-Juvenil": ["Psicopatología Infantil II"],
  "Mentoría II": ["Mentoría I"],
  "Estructura de la Subjetividad": ["Principios del Viviente"],
  "Entrevista Clínica Adultos": [
    "Teoría Sistémica",
    "Teoría Cognitiva Conductual",
    "Teoría Psicoanalítica"
  ],
  "Psicología Educacional II": ["Psicología Educacional I"],
  "Psicología Organizacional II": ["Psicología Organizacional I"],
  "Taller: La Persona del Psicólogo": ["Mentoría II"],
  "Psicofarmacología": ["Psicofisiología", "Psicopatología Adultos"],
  "Ética General": ["Principios de la Naturaleza"],
  "Desarrollo de Proyectos de Investigación": ["Metodología Cuantitativa de la Investigación II"],
  "Estrategias Psicoterapéuticas Cognitivo Conductuales": ["Teoría Cognitiva Conductual"],
  "Estrategias Psicoterapéuticas Sistémicas": ["Teoría Sistémica"],
  "Estrategias Psicoterapéuticas Psicoanalíticas": ["Teoría Psicoanalítica"],
  "Psicopatología y Mal Moral": ["Ética General", "Antropología Filosófica"],
  "Estrategias Psicoterapéuticas Infanto-Juvenil": ["Psicodiagnóstico Infanto-Juvenil"],
  "Estrategias Psicoterapéuticas Humanistas": ["Teoría Humanista"],
  "Seminario de Integración Clínica": ["Psicopatología y Mal Moral"],
  "Práctica Clínica": Object.values(mallaData).flat(),
  "Práctica Clínica Avanzada": ["Práctica Clínica"]
};

/* =========================
   ESTADO GUARDADO
========================= */
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

/* =========================
   CREAR MALLA
========================= */
const malla = document.getElementById("malla");

for (let semestre in mallaData) {
  const columna = document.createElement("div");
  columna.className = "semestre";
  columna.innerHTML = `<h2>${semestre}</h2>`;

  mallaData[semestre].forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.innerText = ramo;

    if (aprobados.includes(ramo)) {
      div.classList.add("aprobado");
    }

    div.onclick = () => manejarClick(ramo, div);
    columna.appendChild(div);
  });

  malla.appendChild(columna);
}

/* =========================
   LÓGICA DE CLICK
========================= */
function manejarClick(ramo, elemento) {
  if (aprobados.includes(ramo)) return;

  const faltantes = (requisitos[ramo] || []).filter(r => !aprobados.includes(r));

  if (faltantes.length > 0) {
    mostrarModal(faltantes);
    elemento.classList.add("bloqueado");
    return;
  }

  aprobados.push(ramo);
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
  elemento.classList.add("aprobado");
}

/* =========================
   MODAL
========================= */
function mostrarModal(faltantes) {
  document.getElementById("mensajeBloqueo").innerText =
    "Debes aprobar primero:\n• " + faltantes.join("\n• ");
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
