const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você sabe sobre cubo-magico?",
        alternativas: [
            {
                texto: "Não sei nada.",
                afirmacao: "Não sabe literalmente nada sobre e nunca viu nada sobre."
            },
            {
                texto: "sei somente as cores que tem...",
                afirmacao: "Continua sem saber nada, mas pelo menos sabe o basico do basico."
            },
            {
                texto: "Sei o basico para montar.",
                afirmacao: "Sabe montar de modo lento, então já sabe bastante."
            },
            {
                texto: "Sei montar!",
                afirmacao: "Sabe montar no modo avançado rapido."
            }
        ]
    },
    {
        enunciado: "Você sabe quantas peças tem um cubo mágico padrão?",
        alternativas: [
            {
                texto: "27",
                afirmacao: "CORRETO! Você sabe quntas peças tem um cubo padrão."
            },
            {
                texto: "26",
                afirmacao: "ERRADO,  Você não sabe quntas peças tem um cubo padrão. alternativa 27 é a correta"
            },
            {
                texto: "24",
                afirmacao: "ERRADO,  Você não sabe quntas peças tem um cubo padrão. alternativa 27 é a correta"
            },
            {
                texto: "25",
                afirmacao: "ERRADO,  Você não sabe quntas peças tem um cubo padrão. alternativa 27 é a correta"
            },
        ]
    },
    {
        enunciado: "Quantas cores típicas tem um cubo mágico padrão?",
        alternativas: [
            {
                texto: "4",
                afirmacao: "ERRADO, Você não sabe quntas cores tem um cubo padrão. alternativa 6 é a corrta."
            },
            {
                texto: "5",
                afirmacao: "ERRADO, Você não sabe quntas cores tem um cubo padrão. alternativa 6 é a corrta."
            },
            {
                texto: "6",
                afirmacao: "CORRETO! Você sabe quntas cores tem um cubo padrão."
            },
            {
                texto: "7",
                afirmacao: "ERRADO, Você não sabe quntas cores tem um cubo padrão. alternativa 6 é a corrta."
            },
        ]
    },
    {
        enunciado: "Qual é o método mais comum para resolver o cubo mágico?",
        alternativas: [
            {
                texto: "CFOP",
                afirmacao: "CORRETO! Você sabe o metodo mais comum para resolver o cubo."
            },
            {
                texto: "PERT",
                afirmacao: "ERRADO,  Você não sabe o metodo mais comum para resolver o cubo. alternativa CFOP é a correta."
            },
            {
                texto: "SWOT",
                afirmacao: "ERRADO,  Você não sabe o metodo mais comum para resolver o cubo. alternativa CFOP é a correta."
            },
            {
                texto: "DMAIC",
                afirmacao: "ERRADO,  Você não sabe o metodo mais comum para resolver o cubo. alternativa CFOP é a correta."
            },
        ]
    },
    {
        enunciado: "Você tem interesse em aprender a montar o cubo-magico?",
        alternativas: [
            {
                texto: "Não tenho interesse algum",
                afirmacao: "ta bom"
            },
            {
                texto: "Acho somente interessante assistir alguem montando.",
                afirmacao: "ta bom"
            },
            {
                texto: "Queria aprender mas acho muito dificil.",
                afirmacao: "continue tentando o resultado para si mesmo é incrivel."
            },
            {
                texto: "tenho muito interesse!",
                afirmacao: "Então tente.",
            },
            {
                texto: "Já sei montar.",
                afirmacao: "ok!",
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por participar!!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();