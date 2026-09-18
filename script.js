const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Em 2026, uma nova inteligência artificial muito poderosa é criada. O que você decide fazer com ela?",
    alternativas: [
      {
        texto: "Usá-la para ajudar a humanidade",
        afirmacao: "Você decidiu usar a inteligência artificial para ajudar a humanidade."
      },
      {
        texto: "Deixar a IA tomar suas próprias decisões",
        afirmacao: "Você permitiu que a inteligência artificial tivesse mais liberdade para tomar decisões."
      }
    ]
  },

  {
    enunciado: "A IA começa a resolver problemas ambientais. Qual será sua próxima decisão?",
    alternativas: [
      {
        texto: "Usar a IA para combater as mudanças climáticas",
        afirmacao: "A IA passou a trabalhar na criação de soluções para proteger o planeta."
      },
      {
        texto: "Usar a IA principalmente para aumentar os lucros",
        afirmacao: "As empresas passaram a usar a IA principalmente para aumentar seus lucros."
      }
    ]
  },

  {
    enunciado: "Em 2040, a inteligência artificial já faz parte da vida de quase todas as pessoas. O que você fará?",
    alternativas: [
      {
        texto: "Defender regras para controlar o uso da IA",
        afirmacao: "Você ajudou a criar regras para garantir que a IA fosse usada de maneira responsável."
      },
      {
        texto: "Deixar as empresas decidirem como usar a IA",
        afirmacao: "As empresas ganharam grande liberdade para decidir como utilizar a inteligência artificial."
      }
    ]
  },

  {
    enunciado: "A IA agora consegue criar novas tecnologias. Qual caminho você escolhe?",
    alternativas: [
      {
        texto: "Criar tecnologias para melhorar a vida das pessoas",
        afirmacao: "A humanidade passou a utilizar a IA para desenvolver tecnologias que melhoraram a qualidade de vida."
      },
      {
        texto: "Criar tecnologias cada vez mais poderosas",
        afirmacao: "A humanidade criou sistemas de inteligência artificial cada vez mais poderosos, sem saber exatamente quais seriam as consequências."
      }
    ]
  }
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

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");

    botaoAlternativas.textContent = alternativa.texto;

    botaoAlternativas.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;

  historiaFinal += afirmacao + " ";

  atual++;

  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
