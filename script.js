const perguntas = [
    {
        enunciado: "Você trabalha?",
        alternativas: [
            { texto: "Sim!", pontuacao: 2 },
            { texto: "Não!", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Qual atitude você toma quando está no tédio?",
        alternativas: [
            { texto: "Procuro estudar!.", pontuacao: 2 },
            { texto: "Eu geralmente fico jogando.", pontuacao: 1 }
        ]
    },
    {
        enunciado: " Você pretende fazer o enem?",
        alternativas: [
            { texto: "Sim.", pontuacao: 2 },
            { texto: "Não.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você vai fazer faculdade?",
        alternativas: [
            { texto: "Não.", pontuacao: 1 },
            { texto: "Sim.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você é uma pessoa organizada?",
        alternativas: [
            { texto: "Não.", pontuacao: 1 },
            { texto: "Sim.", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta