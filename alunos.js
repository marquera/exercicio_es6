// Array de objetos representando os alunos
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'José', nota: 6 },
];

// Função para filtrar os alunos com nota maior ou igual a 6
function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamada da função para obter os alunos aprovados
const alunosAprovadosArray = alunosAprovados(alunos);

// Imprimindo os alunos aprovados
console.log('Alunos aprovados:');
console.log(alunosAprovadosArray);
