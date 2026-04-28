const candidatos = [
  { nome: "Ana Silva", idade: 28, experiencia: 5, vaga: "Desenvolvedor Front-end", tecnologias: ["JavaScript", "React", "Styled Components"] },
  { nome: "Bruno Costa", idade: 32, experiencia: 7, vaga: "Desenvolvedor Back-end", tecnologias: ["Node.js", "Banco de Dados", "PostgreSQL"] },
  { nome: "Carla Souza", idade: 24, experiencia: 2, vaga: "Desenvolvedor Front-end", tecnologias: ["HTML", "CSS", "JavaScript"] },
  { nome: "Diego Lima", idade: 30, experiencia: 4, vaga: "Desenvolvedor Back-end", tecnologias: ["Node.js", "Express", "Banco de Dados"] },
  { nome: "Eduarda Rocha", idade: 26, experiencia: 3, vaga: "Desenvolvedor Front-end", tecnologias: ["Vue.js", "JavaScript"] },
  { nome: "Fábio Santos", idade: 35, experiencia: 10, vaga: "Desenvolvedor Back-end", tecnologias: ["Java", "Spring Boot"] },
  { nome: "Gabriela Mendes", idade: 29, experiencia: 6, vaga: "Desenvolvedor Front-end", tecnologias: ["Angular", "TypeScript"] },
  { nome: "Heleno Neto", idade: 27, experiencia: 4, vaga: "Desenvolvedor Back-end", tecnologias: ["Node.js", "Banco de Dados", "MongoDB"] },
  { nome: "Íris Oliveira", idade: 23, experiencia: 1, vaga: "Desenvolvedor Front-end", tecnologias: ["React Native", "JavaScript"] },
  { nome: "João Paulo", idade: 31, experiencia: 8, vaga: "Desenvolvedor Back-end", tecnologias: ["Python", "Django", "PostgreSQL"] }
];
let candidatosFrontEnd = candidatos.filter((candidato) => {
    if (candidato.vaga === "Desenvolvedor Front-end" && candidato.tecnologias.includes("JavaScript") || candidato.experiencia >= 3 && candidato.vaga === "Desenvolvedor Front-end") {
        return true;
    }
    return false;
});
console.log(candidatosFrontEnd);

let candidatosBackEnd = candidatos.filter((candidato) => {
    if (candidato.vaga === "Desenvolvedor Back-end" && candidato.tecnologias.includes("Node.js") && candidato.tecnologias.includes("Banco de Dados")) {
        return true;
    }
    return false;
});
console.log(candidatosBackEnd);