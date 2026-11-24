/* =============================================================
   Terminal pessoal — script.js
   Toda a lógica do site está aqui.
   Para personalizar, edite APENAS o bloco "1) SEUS DADOS".
   ============================================================= */
(function () {
  "use strict";

  /* ===========================================================
     1) SEUS DADOS
     Troque os textos abaixo pelos seus. O resto é a máquina.
     Os itens marcados "exemplo" são só para o site não ficar vazio.
     =========================================================== */
  var DADOS = {
    nome:    "Victor",
    apelido: "Spider",            // aparece na barra de cima e no prompt
    sistema: "OS",                // sufixo da logo (ex.: LIA.SYS)
    idade:   22,
    cidade:  "São Paulo",
    oficio:  "Jogos, filmes, séries, músicas.",
    email:   "whyterdzn@gmail.com",
    rede:    "@vultzin",

    /* exemplo: a arte do comando "sobre" (estilo neofetch) */
    ascii: [
      "      .-------.      ",
      "     /  o   o  \\     ",
      "    |     ^     |    ",
      "    |   '---'   |    ",
      "     \\_________/     ",
      "    __|       |__    ",
      "   /  |       |  \\   ",
      "  |   |_______|   |  ",
      "      |       |      ",
      "      |       |      ",
      "     _|       |_     "
    ],

    /* exemplo: [nome, autor/diretor, nota 0-5, resenha, status] */
    estante: {
      livros: [
        ["Grande Sertão: Veredas", "Guimarães Rosa", 5, "Difícil nas primeiras páginas, e depois não dá mais pra largar. Releio o começo de vez em quando só pelo som das frases.", "lido"],
        ["Torto Arado", "Itamar Vieira Junior", 5, "Terminei e passei uns dias sem conseguir começar outro.", "lido"],
        ["A Cidade e as Serras", "Eça de Queirós", 4, "Cheguei por causa de uma citação e fiquei pelo humor.", "lido"],
        ["O Nome da Rosa", "Umberto Eco", 0, "Terceira tentativa. Uma hora vai.", "lendo"],
        ["Dicionário de Lugares Imaginários", "Alberto Manguel", 0, "Só folheando, sem pressa nenhuma.", "quero"]
      ],
      filmes: [
        ["Stalker", "Andrei Tarkovski", 5, "Três horas e eu não queria que acabasse.", "lido"],
        ["Chuva Negra", "Shohei Imamura", 4, "Vi por causa da trilha e fiquei pela fotografia.", "lido"],
        ["A Viagem de Chihiro", "Hayao Miyazaki", 5, "Assisto uma vez por ano, sempre no mesmo dia.", "lido"],
        ["Paris, Texas", "Wim Wenders", 0, "Na lista faz tempo. Todo mundo fala bem.", "quero"]
      ]
    },

    /* exemplo: o quiz "quanto você me conhece?" */
    quiz: [
      { p: "Qual é o meu apelido aqui no terminal?", o: ["seunome", "admin", "root", "visitante"], c: 0 },
      { p: "De que cidade eu sou?", o: ["Sua Cidade", "Recife", "Curitiba", "Belém"], c: 0 },
      { p: "Quantos projetos tem na minha pasta /projetos?", o: ["3", "6", "9", "12"], c: 1 },
      { p: "O que eu bebo enquanto trabalho?", o: ["café coado no pano", "refrigerante", "chá gelado", "suco de laranja"], c: 0 },
      { p: "Qual destas manias é minha?", o: ["fotografar portas", "morder canetas", "assobiar baixinho", "arrumar a mesa"], c: 0 }
    ],

    /* exemplo: frases do biscoito da sorte */
    frases: [
      "Quem planta café colhe conversa.",
      "Devagar se vai longe, mas ninguém avisou que era tão longe.",
      "O dia que parece perdido é o que você vai lembrar depois.",
      "Guarde o que te faz rir; o resto se resolve.",
      "Nenhuma aba aberta vale mais que uma boa soneca.",
      "Feito é melhor que perfeito, quase sempre.",
      "Você já sabe a resposta; só não queria saber.",
      "Toda semana tem uma quinta-feira escondida esperando você.",
      "Cuidado com o que você deseja, pode dar certo.",
      "Quem escreve carta nunca fica completamente sozinho."
    ],

    // exemplo:
    gostos: {
      "jogos":   ["plataformas 2D", "puzzles de lógica", "roguelikes curtos", "jogos de pesca e barco"],
      "filmes":  ["ficção científica lenta", "documentários sobre trens", "animações de estúdios pequenos", "filmes mudos"],
      "comidas": ["pão de queijo", "tapioca de coco", "pastel de feira", "café coado no pano"],
      "manias":  ["deixar abas abertas por semanas", "anotar sonhos no celular", "fotografar portas", "contar degraus"]
    },

    // exemplo:
    tocando: [
      ["Noite Vermelha", "Cassete Azul", "3:42"],
      ["Linha 4", "Os Faróis do Norte", "4:11"],
      ["Chuva de Domingo", "Marta Ventura", "2:58"],
      ["Pixel no Escuro", "Dona Onda", "3:20"],
      ["Ônibus das Seis", "Bairro Alto", "5:03"],
      ["Fita Gasta", "Ruído Branco Orquestra", "3:09"]
    ],

    // exemplo: d = dia/mês, h = humor de 0 a 10
    diario: [
      { d: "12/03", h: 8, t: "Hoje acordei cedo e reorganizei a estante por cor. Foi um bom dia." },
      { d: "11/03", h: 6, t: "Choveu o dia inteiro, então testei uma receita que deu errado e ficou ótima." },
      { d: "09/03", h: 9, t: "Saí sem destino e caminhei até o fim da rua sem fone de ouvido. Quero repetir isso." },
      { d: "08/03", h: 5, t: "Passei a tarde toda consertando a luminária que estava quebrada desde o ano passado." },
      { d: "06/03", h: 7, t: "Encontrei um amigo antigo e li dez páginas antes de dormir no sofá." },
      { d: "05/03", h: 8, t: "Tentei aprender algo novo e descobri um café que só abre às quintas. Sem pressa." }
    ],

    // exemplo: [nome, descrição, status]
    projetos: [
      ["cafe-do-bairro", "mapa ilustrado dos cafés da minha rua", "concluído"],
      ["fita-sonora", "coleção de gravações de sons da cidade", "em andamento"],
      ["jardim-de-notas", "caderno digital com ideias soltas", "em andamento"],
      ["radio-casa", "rádio caseira com playlists por humor", "pausado"],
      ["cartas-sem-destino", "cartas escritas para estranhos", "em andamento"],
      ["teclado-de-1987", "restauração de um teclado antigo", "concluído"]
    ],

    /* exemplo: palavras do jogo da forca (de preferência sem acento) */
    palavras: ["aranha", "teclado", "biscoito", "foguete", "janela", "cadeira", "planeta", "melodia", "biblioteca", "vagalume", "semente", "espelho"],

    // exemplo:
    haikus: [
      ["O café esfria", "enquanto penso na resposta", "a chuva já passou"],
      ["Aba aberta há dias", "guarda um pedaço de mim", "fecho amanhã, talvez"],
      ["Cursor piscando", "pergunta sem pressa alguma", "e eu sem resposta"]
    ]
  };
  /* ================== fim dos seus dados ================== */


  /* ---------- 2. Ferramentas ---------- */
  var $ = function (s) { return document.querySelector(s) };
  var out = $("#out"), inp = $("#cmd"), root = document.documentElement;
  var inicio = Date.now();

  var R = function (a) { return a[Math.floor(Math.random() * a.length)] };
  var RI = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)) };
  var shuf = function (a) { return a.map(function (x) { return [Math.random(), x] }).sort(function (p, q) { return p[0] - q[0] }).map(function (x) { return x[1] }) };
  var pick = function (a, n) { return shuf(a).slice(0, n) };
  var pad = function (n) { return n < 10 ? "0" + n : "" + n };
  var padR = function (s, n) { s = String(s); while (s.length < n) s += " "; return s };
  var esperar = function (ms) { return new Promise(function (r) { setTimeout(r, ms) }) };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 3. Apelidos curtos para os seus dados ---------- */
  var apelido = DADOS.apelido || DADOS.nome.split(" ")[0].toLowerCase();
  var P = {
    nome: DADOS.nome, idade: DADOS.idade, cidade: DADOS.cidade,
    oficio: DADOS.oficio, email: DADOS.email, rede: DADOS.rede
  };
  var GOSTOS = DADOS.gostos;
  var TRACKS = DADOS.tocando;
  var DIARIO = DADOS.diario;
  var PR = DADOS.projetos;
  var HAIKU = DADOS.haikus;
  var PALAVRAS = DADOS.palavras || ["aranha"];
  var CLIMAS = ["chuva fina", "céu aberto", "nublado", "calor de rachar", "vento frio", "garoa"];
  var PROMPT = "visitante@" + apelido + ":~$";

  /* ---------- 4. Tema ---------- */
  var TEMAS = ["verde", "ambar", "azul", "branco", "papel", "neon", "oitenta"];
  var TEMA_APELIDOS = {
    "verde": "verde", "ambar": "ambar", "azul": "azul", "branco": "branco",
    "papel": "papel", "papel e tinta": "papel", "tinta": "papel", "claro": "papel",
    "neon": "neon", "rosa": "neon", "roxo": "neon",
    "oitenta": "oitenta", "anos 80": "oitenta", "anos80": "oitenta", "retro": "oitenta", "80": "oitenta"
  };
  function setTema(t) {
    if (t === "verde") root.removeAttribute("data-tema"); else root.setAttribute("data-tema", t);
    try { localStorage.setItem("terminal_tema", t) } catch (e) { }
  }
  try {
    var st = localStorage.getItem("terminal_tema");
    if (st && TEMAS.indexOf(st) >= 0) setTema(st);
  } catch (e) { }

  /* ---------- 5. Barra de cima ---------- */
  $("#who").textContent = "visitante@" + apelido;
  $("#stat").textContent = "humor " + RI(5, 10) + "/10 · cafés hoje: " + RI(1, 5) + " · clima: " + R(CLIMAS);
  function clock() { var d = new Date(); $("#clock").textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) }
  clock(); setInterval(clock, 30000);

  /* ---------- 5b. Som (opcional, desligado por padrão) ----------
     Os sons são gerados na hora com o Web Audio, sem arquivos de áudio. */
  var som = { ligado: false, ctx: null, ruido: null };
  try { som.ligado = localStorage.getItem("terminal_som") === "1" } catch (e) { }

  function somLigar() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try {
      if (!som.ctx) {
        som.ctx = new AC();
        /* um pedacinho de ruído que se repete a cada tecla */
        var n = Math.floor(som.ctx.sampleRate * 0.02);
        var buf = som.ctx.createBuffer(1, n, som.ctx.sampleRate);
        var d = buf.getChannelData(0);
        for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 4);
        som.ruido = buf;
      }
      if (som.ctx.state === "suspended") som.ctx.resume();
      return true;
    } catch (e) { return false }
  }
  function somTecla() { /* clique de tecla mecânica */
    if (!som.ligado || !som.ctx || !som.ruido) return;
    try {
      var src = som.ctx.createBufferSource(); src.buffer = som.ruido;
      var f = som.ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 2300; f.Q.value = 1.1;
      var g = som.ctx.createGain(); g.gain.value = 0.05;
      src.connect(f); f.connect(g); g.connect(som.ctx.destination);
      src.start(som.ctx.currentTime);
    } catch (e) { }
  }
  function somBipe() { /* bipe curto quando o comando termina */
    if (!som.ligado || !som.ctx) return;
    try {
      var t = som.ctx.currentTime;
      [880, 1320].forEach(function (hz, i) {
        var o = som.ctx.createOscillator(); o.type = "square"; o.frequency.value = hz;
        var g = som.ctx.createGain();
        var t0 = t + i * 0.07;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.045, t0 + 0.008);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.07);
        o.connect(g); g.connect(som.ctx.destination);
        o.start(t0); o.stop(t0 + 0.08);
      });
    } catch (e) { }
  }
  function somDefinir(ligado) {
    if (ligado) { if (!somLigar()) { som.ligado = false; return false } }
    som.ligado = !!ligado;
    try { localStorage.setItem("terminal_som", som.ligado ? "1" : "0") } catch (e) { }
    return som.ligado;
  }
  var botaoSom = null;
  function somBotaoAtualizar() {
    if (!botaoSom) return;
    botaoSom.textContent = "som: " + (som.ligado ? "ligado" : "desligado");
    botaoSom.className = som.ligado ? "on" : "";
  }

  /* ---------- 6. Saída ---------- */
  var busy = false, skip = false;
  /* espera um "quadro": usa o requestAnimationFrame (suave) mas com um limite de
     tempo, para a animação continuar mesmo com a aba em segundo plano */
  var frame = function () {
    return new Promise(function (r) {
      var pronto = false;
      var fim = function () { if (!pronto) { pronto = true; r() } };
      setTimeout(fim, 24);
      requestAnimationFrame(fim);
    });
  };
  function scroll() { out.scrollTop = out.scrollHeight }

  function mk(text) {
    var cls = "", t = String(text);
    var c = t.charAt(0);
    if (c === "!") { cls = " hi"; t = t.slice(1) }
    else if (c === "~") { cls = " dim"; t = t.slice(1) }
    else if (c === "?") { cls = " err"; t = t.slice(1) }
    var el = document.createElement("div"); el.className = "ln" + cls; out.appendChild(el); return [el, t];
  }

  async function print(lines) {
    lines = lines || [];
    busy = true; skip = reduce;
    for (var i = 0; i < lines.length; i++) {
      var m = mk(lines[i]), el = m[0], t = m[1], n = t.length;
      if (skip || i >= 5 || n < 2) { el.textContent = t; continue }
      var step = Math.max(2, Math.ceil(n / 14));
      for (var k = 0; k < n && !skip; k += step) { el.textContent = t.slice(0, k + step); scroll(); await frame() }
      el.textContent = t;
    }
    scroll(); busy = false;
    if (lines.length && !skip) somBipe();
  }

  function echo(cmd) {
    var el = document.createElement("div");
    el.className = "ln echo";
    el.textContent = $("#pr").textContent + " " + cmd;
    out.appendChild(el); scroll();
  }

  /* ---------- 7. Descobertas (segredos) ---------- */
  var found = {}, TOTAL = 10;
  function barra(n, t) {
    var s = "";
    for (var i = 0; i < t; i++) s += i < n ? "■" : "□";
    return "[" + s + "]";
  }
  function discover(k) {
    if (found[k]) return [];
    found[k] = 1;
    var n = Object.keys(found).length;
    var l = ["", "~descoberta nova! (" + n + "/" + TOTAL + ") " + barra(n, TOTAL)];
    if (n === TOTAL) l = l.concat([
      "",
      "!você achou todos os " + TOTAL + " segredos. parabéns de verdade.",
      "  quase ninguém procura até o fim.",
      "  me manda um oi no contato dizendo \"achei tudo\".",
      "",
      "         *",
      "        ***",
      "       *****",
      "      *******",
      "       *****",
      "        ***",
      "         *"
    ]);
    return l;
  }

  /* ---------- 8. Modos interativos (jogo, quiz, recado) ---------- */
  var modo = null; // { tipo: "adivinha" | "quiz" | "recado", ... }

  function atualizarPrompt() {
    $("#pr").textContent = (modo && modo.tipo === "recado") ? "recado> " : PROMPT;
  }

  /* --- adivinha --- */
  function adivinhaIniciar() {
    modo = { tipo: "adivinha", n: RI(1, 20), tries: 0 };
    return ["!pensei em um número de 1 a 20. qual é?", "~digite o número, ou \"sair\"."];
  }
  function adivinhaResponder(linha) {
    if (linha.toLowerCase() === "sair") { modo = null; return ["jogo encerrado."] }
    var n = parseInt(linha, 10);
    if (isNaN(n)) return ["?digite um número de 1 a 20, ou \"sair\"."];
    modo.tries++;
    if (n === modo.n) { var t = modo.tries; modo = null; return ["!acertou em " + t + " tentativa" + (t > 1 ? "s" : "") + "!", "~fim de jogo."] }
    return [n < modo.n ? "maior..." : "menor...", "~tentativas: " + modo.tries];
  }

  /* --- quiz --- */
  function quizPerguntar() {
    var q = DADOS.quiz[modo.i];
    var l = ["~pergunta " + (modo.i + 1) + " de " + DADOS.quiz.length + ":", "!" + q.p];
    q.o.forEach(function (o, k) { l.push("  [" + (k + 1) + "] " + o) });
    return l;
  }
  function quizIniciar() {
    modo = { tipo: "quiz", i: 0, pontos: 0 };
    return ["!quiz: quanto você me conhece?", "~5 perguntas. digite o número da resposta, ou \"sair\".", ""].concat(quizPerguntar());
  }
  function quizResponder(linha) {
    if (linha.toLowerCase() === "sair") { modo = null; return ["quiz cancelado."] }
    var q = DADOS.quiz[modo.i], n = parseInt(linha, 10);
    if (isNaN(n) || n < 1 || n > q.o.length) return ["?digite um número de 1 a " + q.o.length + ", ou \"sair\"."];
    var acertou = (n - 1) === q.c;
    if (acertou) modo.pontos++;
    modo.i++;
    var l = [acertou ? "!certo: " + q.o[q.c] : "?não... era: " + q.o[q.c]];
    if (modo.i >= DADOS.quiz.length) {
      var p = modo.pontos, t = DADOS.quiz.length;
      var msg = p === t ? "!acertou tudo. você me conhece mesmo."
        : p >= t / 2 ? "~nada mal."
          : "~acho que precisamos conversar mais.";
      modo = null;
      return l.concat(["", "!resultado: " + p + " de " + t, msg]);
    }
    return l.concat([""]).concat(quizPerguntar());
  }

  /* --- recado (livro de visitas, salvo no seu navegador) --- */
  var CHAVE_RECADOS = "terminal_recados";
  function lerRecados() { try { return JSON.parse(localStorage.getItem(CHAVE_RECADOS) || "[]") } catch (e) { return [] } }
  function gravarRecados(r) { try { localStorage.setItem(CHAVE_RECADOS, JSON.stringify(r)) } catch (e) { } }
  function recadoIniciar() {
    modo = { tipo: "recado" };
    return ["~escreva seu recado e aperte Enter. (\"sair\" cancela)"];
  }
  function recadoResponder(linha) {
    if (linha.toLowerCase() === "sair") { modo = null; return ["recado cancelado."] }
    var r = lerRecados();
    r.push({ t: linha, d: new Date().toLocaleDateString("pt-BR") });
    gravarRecados(r);
    modo = null;
    return ["!recado salvo. obrigado por escrever.", "~você é o " + r.length + "º a deixar recado."];
  }
  function recadoListar() {
    var r = lerRecados();
    if (!r.length) return ["!livro de visitas — ainda está em branco.", "", "~use \"recado novo\" para escrever o primeiro."];
    var l = ["!livro de visitas  (" + r.length + "):"];
    r.forEach(function (x, i) { l.push("  [" + (i + 1) + "] " + x.d + "  " + x.t) });
    l.push("", "~use \"recado novo\" para escrever. \"recado apagar\" limpa tudo.");
    return l;
  }

  function responderModo(linha) {
    if (modo.tipo === "adivinha") return adivinhaResponder(linha);
    if (modo.tipo === "quiz") return quizResponder(linha);
    if (modo.tipo === "forca") return forcaResponder(linha);
    if (modo.tipo === "velha") return velhaResponder(linha);
    return recadoResponder(linha);
  }

  /* ---------- 8b. Jogos ---------- */

  /* --- forca --- */
  var FORCA_BASE = ["  +---+", "  |   |", "      |", "      |", "      |", "      |", "========="];
  function forcaDesenho(erros) {
    var d = FORCA_BASE.slice(0);
    if (erros > 0) d[2] = "  O   |";
    if (erros > 1) d[3] = "  |   |";
    if (erros > 2) d[3] = " /|   |";
    if (erros > 3) d[3] = " /|\\  |";
    if (erros > 4) d[4] = " /    |";
    if (erros > 5) d[4] = " / \\  |";
    return d;
  }
  function forcaMostrar() {
    var m = modo;
    var visivel = m.palavra.split("").map(function (c) {
      return (c === " " || m.acertos.indexOf(c) >= 0) ? c : "_";
    }).join(" ");
    return forcaDesenho(m.erros.length).concat([
      "",
      "  " + visivel,
      "",
      "  erradas: " + (m.erros.join(" ") || "—") + "     vidas: " + (6 - m.erros.length)
    ]);
  }
  function forcaIniciar() {
    modo = { tipo: "forca", palavra: R(PALAVRAS).toLowerCase(), acertos: [], erros: [] };
    return [
      "!forca: adivinhe a palavra, uma letra por vez.",
      "~digite uma letra, ou a palavra inteira. \"sair\" desiste.",
      ""
    ].concat(forcaMostrar());
  }
  function forcaResponder(linha) {
    var m = modo, t = linha.toLowerCase().trim();
    if (t === "sair") { var p = m.palavra; modo = null; return ["~a palavra era \"" + p + "\". fica pra próxima."] }
    if (t.length > 1) {
      if (t === m.palavra) { modo = null; return ["!acertou de primeira: " + m.palavra, "~a palavra inteira, sem medo."] }
      return ["?não é essa. tente uma letra por vez."];
    }
    if (!/^[a-zà-ú]$/.test(t)) return ["?digite uma letra."];
    if (m.acertos.indexOf(t) >= 0 || m.erros.indexOf(t) >= 0) return ["~você já tentou o \"" + t + "\"."];
    if (m.palavra.indexOf(t) >= 0) m.acertos.push(t); else m.erros.push(t);
    var ganhou = m.palavra.split("").every(function (c) { return c === " " || m.acertos.indexOf(c) >= 0 });
    if (ganhou) { modo = null; return ["!" + m.palavra + " — acertou!", "~erros: " + m.erros.length + " de 6."] }
    if (m.erros.length >= 6) { var p2 = m.palavra; modo = null; return forcaDesenho(6).concat(["", "?acabaram as vidas. a palavra era \"" + p2 + "\"."]) }
    return forcaMostrar();
  }

  /* --- jogo da velha --- */
  var VELHA_LINHAS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  function velhaMostrar(b) {
    var c = b.map(function (x, i) { return x || String(i + 1) });
    return [
      "",
      "     |     |     ",
      "  " + c[0] + "  |  " + c[1] + "  |  " + c[2] + "  ",
      "     |     |     ",
      "-----+-----+-----",
      "     |     |     ",
      "  " + c[3] + "  |  " + c[4] + "  |  " + c[5] + "  ",
      "     |     |     ",
      "-----+-----+-----",
      "     |     |     ",
      "  " + c[6] + "  |  " + c[7] + "  |  " + c[8] + "  ",
      "     |     |     "
    ];
  }
  function velhaVencedor(b) {
    for (var i = 0; i < VELHA_LINHAS.length; i++) {
      var l = VELHA_LINHAS[i];
      if (b[l[0]] && b[l[0]] === b[l[1]] && b[l[1]] === b[l[2]]) return b[l[0]];
    }
    return b.indexOf("") < 0 ? "empate" : null;
  }
  function velhaFechar(b, quem) {
    for (var i = 0; i < VELHA_LINHAS.length; i++) {
      var l = VELHA_LINHAS[i], cont = 0, vazio = -1;
      for (var k = 0; k < 3; k++) {
        if (b[l[k]] === quem) cont++;
        else if (!b[l[k]]) vazio = l[k];
      }
      if (cont === 2 && vazio >= 0) return vazio;
    }
    return -1;
  }
  function velhaIniciar() {
    modo = { tipo: "velha", b: ["", "", "", "", "", "", "", "", ""] };
    return [
      "!jogo da velha: você é o X, eu sou o O.",
      "~digite o número da casa que quer marcar, ou \"sair\"."
    ].concat(velhaMostrar(modo.b));
  }
  function velhaResponder(linha) {
    if (linha.toLowerCase() === "sair") { modo = null; return ["jogo cancelado."] }
    var b = modo.b, n = parseInt(linha, 10);
    if (isNaN(n) || n < 1 || n > 9 || b[n - 1]) return ["?digite o número de uma casa vazia (1 a 9), ou \"sair\"."];

    b[n - 1] = "X";
    var fim = velhaVencedor(b);
    if (fim === "X") { modo = null; return ["!você ganhou!"] .concat(velhaMostrar(b)) }
    if (fim === "empate") { modo = null; return ["~empate. deu velha."] .concat(velhaMostrar(b)) }

    var j = velhaFechar(b, "O");
    if (j < 0) j = velhaFechar(b, "X");
    if (j < 0) {
      var livres = []; b.forEach(function (x, i) { if (!x) livres.push(i) });
      j = livres.indexOf(4) >= 0 ? 4 : R(livres);
    }
    b[j] = "O";
    var fim2 = velhaVencedor(b);
    if (fim2 === "O") { modo = null; return ["?ganhei. a casa " + (j + 1) + " fechou a linha."].concat(velhaMostrar(b)) }
    if (fim2 === "empate") { modo = null; return ["~empate. deu velha."].concat(velhaMostrar(b)) }
    return ["~minha vez: casa " + (j + 1) + "."].concat(velhaMostrar(b));
  }

  /* --- matrix --- */
  var MATRIX_CHARS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃ0123456789:.+=*";
  async function matrixRodar() {
    busy = true; skip = false;
    var ALT = 12, LARG = 44, els = [], i, k;
    for (i = 0; i < ALT; i++) {
      var el = document.createElement("div");
      el.className = "ln hi";
      out.appendChild(el); els.push(el);
    }
    var voltas = reduce ? 1 : 50;
    for (var f = 0; f < voltas && !skip; f++) {
      for (i = 0; i < ALT; i++) {
        var s = "";
        for (k = 0; k < LARG; k++) s += Math.random() < 0.3 ? MATRIX_CHARS.charAt(Math.floor(Math.random() * MATRIX_CHARS.length)) : " ";
        els[i].textContent = s;
      }
      scroll();
      await frame();
      if (!reduce) await esperar(30);
    }
    els.forEach(function (e) { e.remove() });
    busy = false;
    await print(["~acordou? nada disso é real.", "~voltando ao normal."]);
    return [];
  }

  /* --- hack --- */
  async function hackRodar() {
    var host = "192.168." + RI(0, 9) + "." + RI(2, 254);
    await print([
      "!iniciando acesso remoto a " + host + " ...",
      "~calma, é brincadeira. ninguém está sendo invadido."
    ]);
    busy = true; skip = false;
    var el = document.createElement("div");
    el.className = "ln";
    out.appendChild(el);
    var etapas = ["varrendo portas", "quebrando o hash", "abrindo o cofre", "pegando o café do alvo", "apagando rastros"];
    for (var e = 0; e < etapas.length && !skip; e++) {
      for (var p = 0; p < 100 && !skip; p += RI(9, 18)) {
        var cheio = Math.round(Math.min(p, 100) / 5), bAr = "";
        for (var k = 0; k < 20; k++) bAr += k < cheio ? "█" : "░";
        el.textContent = padR(etapas[e], 24) + "[" + bAr + "] " + padR(Math.min(p, 100), 3) + "%";
        scroll();
        await frame(); await esperar(35);
      }
      el.textContent = padR(etapas[e], 24) + "[████████████████████] 100%";
      await esperar(140);
    }
    busy = false;
    if (skip) { el.textContent = "invasão cancelada a pedido do usuário."; return [] }
    await print([
      "",
      "!acesso concedido.",
      "  arquivos encontrados: 1",
      "  conteúdo: \"parabéns, você invadiu um site que só tem café e haikus\"",
      "  dados roubados: 0",
      "",
      "~a verdadeira invasão é a que a gente faz no caminho."
    ]);
    return [];
  }

  /* --- snake --- */
  async function snakeRodar() {
    var L = 16, A = 12;
    var cobra = [{ x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }];
    var dir = { x: 1, y: 0 }, prox = { x: 1, y: 0 };
    var comida = { x: 10, y: 6 }, pontos = 0, fim = false, i, y, x;

    var cabecalho = document.createElement("div");
    cabecalho.className = "ln dim";
    out.appendChild(cabecalho);
    var els = [];
    for (i = 0; i < A; i++) {
      var el = document.createElement("div"); el.className = "ln hi";
      out.appendChild(el); els.push(el);
    }

    function tecla(e) {
      var k = e.key;
      if (k === "ArrowUp" && dir.y === 0) prox = { x: 0, y: -1 };
      else if (k === "ArrowDown" && dir.y === 0) prox = { x: 0, y: 1 };
      else if (k === "ArrowLeft" && dir.x === 0) prox = { x: -1, y: 0 };
      else if (k === "ArrowRight" && dir.x === 0) prox = { x: 1, y: 0 };
      else if (k === "q" || k === "Q" || k === "Escape") fim = true;
      else return;
      e.preventDefault(); e.stopPropagation();
    }

    document.addEventListener("keydown", tecla, true);
    inp.readOnly = true;
    busy = true; skip = false;

    var passos = 0;
    try {
      while (!fim && !skip && passos < 300) {
      dir = prox;
      var cab = { x: cobra[0].x + dir.x, y: cobra[0].y + dir.y };
      if (cab.x < 0 || cab.y < 0 || cab.x >= L || cab.y >= A) { fim = true; break }
      for (i = 0; i < cobra.length - 1; i++) if (cobra[i].x === cab.x && cobra[i].y === cab.y) { fim = true; break }
      if (fim) break;

      cobra.unshift(cab);
      if (cab.x === comida.x && cab.y === comida.y) {
        pontos++;
        var livre = false, tentativas = 0;
        while (!livre && tentativas < 200) {
          comida = { x: RI(0, L - 1), y: RI(0, A - 1) };
          livre = true; tentativas++;
          for (i = 0; i < cobra.length; i++) if (cobra[i].x === comida.x && cobra[i].y === comida.y) livre = false;
        }
      } else cobra.pop();

      var grade = [];
      for (y = 0; y < A; y++) {
        var linha = "";
        for (x = 0; x < L; x++) linha += "·";
        grade.push(linha.split(""));
      }
      grade[comida.y][comida.x] = "◆";
      for (i = cobra.length - 1; i >= 0; i--) grade[cobra[i].y][cobra[i].x] = i === 0 ? "█" : "▒";
      for (i = 0; i < A; i++) els[i].textContent = grade[i].join("");

      cabecalho.textContent = "snake · pontos: " + pontos + " · setas para mover · q para sair";
      scroll();
      passos++;
      await esperar(150);
    }

    } finally {
      document.removeEventListener("keydown", tecla, true);
      els.forEach(function (e) { e.remove() });
      cabecalho.remove();
      inp.readOnly = false;
      busy = false;
    }

    await print([
      "",
      "!fim de jogo — pontos: " + pontos,
      pontos >= 15 ? "~isso foi bom de verdade." : pontos >= 5 ? "~nada mal." : "~treine mais um pouco."
    ]);
    return [];
  }

  /* --- konami (segredo: ↑ ↑ ↓ ↓ ← → ← → B A) --- */
  var KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  var konamiPos = 0, konamiFeito = false;
  document.addEventListener("keydown", function (e) {
    if (inp.readOnly) return;
    var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (k === KONAMI[konamiPos]) {
      konamiPos++;
      if (konamiPos === KONAMI.length) {
        konamiPos = 0;
        if (!konamiFeito) { konamiFeito = true; inp.value = ""; run("konami"); }
      }
    } else {
      konamiPos = (k === KONAMI[0]) ? 1 : 0;
    }
  }, true);

  /* ---------- 9. Auxiliares de conteúdo ---------- */
  function estrelas(n) {
    if (!n) return "—";
    var s = ""; for (var i = 0; i < 5; i++) s += i < n ? "★" : "☆";
    return s;
  }
  function listaEstante(tipo) {
    var itens = (DADOS.estante[tipo] || []);
    var l = ["!estante / " + tipo + "  (" + itens.length + "):"];
    itens.forEach(function (it, i) {
      l.push("  [" + (i + 1) + "] " + padR(it[0].slice(0, 30), 32) + estrelas(it[2]) + "  " + it[4]);
    });
    var agora = itens.filter(function (it) { return it[4] === "lendo" });
    if (agora.length) l.push("", "~" + (tipo === "livros" ? "lendo" : "assistindo") + " agora: " + agora[0][0] + " — " + agora[0][1]);
    l.push("", "~use \"" + tipo + " 1\" para ver a resenha.");
    return l;
  }
  function detalheEstante(tipo, a) {
    var nome = tipo === "livros" ? "livro" : "filme";
    var it = (DADOS.estante[tipo] || [])[parseInt(a, 10) - 1];
    if (!it) return ["?" + nome + " não encontrado. veja \"" + tipo + "\"."];
    return ["!" + it[0], "  " + it[1] + "   " + estrelas(it[2]) + "   " + it[4], "", it[3]];
  }
  function sobreMim() {
    var info = [
      ["usuario", P.nome],
      ["apelido", apelido],
      ["idade", P.idade + " anos"],
      ["cidade", P.cidade],
      ["oficio", P.oficio],
      ["e-mail", P.email],
      ["rede", P.rede],
      ["sistema", apelido.toUpperCase() + "." + DADOS.sistema + " v1.3"],
      ["tema", root.getAttribute("data-tema") || "verde"],
      ["tempo no ar", Math.max(1, Math.round((Date.now() - inicio) / 60000)) + " min"],
      ["projetos", PR.length + " na pasta"],
      ["estante", (DADOS.estante.livros || []).length + " livros, " + (DADOS.estante.filmes || []).length + " filmes"],
      ["segredos", Object.keys(found).length + " de " + TOTAL],
      ["recados", lerRecados().length]
    ];
    var arte = DADOS.ascii || [];
    var l = ["!sobre mim:", ""];
    if (window.innerWidth < 620) {
      arte.forEach(function (x) { l.push("!" + x) });
      l.push("");
      info.forEach(function (x) { l.push("  " + padR(x[0], 11) + " " + x[1]) });
      return l;
    }
    var w = 0; arte.forEach(function (x) { if (x.length > w) w = x.length });
    var n = Math.max(arte.length, info.length);
    for (var i = 0; i < n; i++) {
      var esq = padR(arte[i] || "", w);
      var dir = info[i] ? padR(info[i][0], 11) + " " + info[i][1] : "";
      l.push(i < arte.length ? "!" + esq + "  " + dir : " " + esq + "  " + dir);
    }
    return l;
  }

  /* ---------- 10. Os comandos ---------- */
  var CMDS = {
    "ajuda": { d: "mostra esta lista", f: function () {
      var l = ["!comandos disponíveis:"];
      Object.keys(CMDS).forEach(function (k) { if (!CMDS[k].h) l.push("  " + padR(k, 12) + " " + CMDS[k].d) });
      l.push("", "~dica: use Tab para completar e as setas ↑ ↓ para repetir comandos.", "~existem comandos escondidos. boa sorte.");
      return l
    } },

    "sobre": { d: "quem eu sou, estilo neofetch", f: sobreMim },

    "quem-sou": { d: "uma apresentação", f: function () { return [
      "!" + P.nome + ", " + P.idade + " anos, de " + P.cidade + ".",
      "Nas horas vagas " + P.oficio + ".",
      "Este site é o meu quarto na internet: sem vitrine, sem currículo."
    ] } },

    "livros": { d: "minha estante de livros", f: function (a) { return a ? detalheEstante("livros", a) : listaEstante("livros") } },
    "filmes": { d: "minha estante de filmes", f: function (a) { return a ? detalheEstante("filmes", a) : listaEstante("filmes") } },

    "recado": { d: "livro de visitas (recado novo)", f: function (a) {
      a = (a || "").toLowerCase();
      if (a === "novo") return recadoIniciar();
      if (a.indexOf("novo ") === 0) {
        var texto = a.slice(5).trim();
        if (!texto) return recadoIniciar();
        var r = lerRecados(); r.push({ t: texto, d: new Date().toLocaleDateString("pt-BR") }); gravarRecados(r);
        return ["!recado salvo. obrigado por escrever."];
      }
      if (a === "apagar") { gravarRecados([]); return ["livro de visitas esvaziado."] }
      if (a.indexOf("apagar ") === 0) {
        var r2 = lerRecados(); var n = parseInt(a.slice(7), 10);
        if (!r2[n - 1]) return ["?recado não encontrado."];
        r2.splice(n - 1, 1); gravarRecados(r2);
        return ["recado apagado."];
      }
      return recadoListar();
    } },

    "quiz": { d: "quanto você me conhece? (5 perguntas)", f: quizIniciar },
    "fortuna": { d: "biscoito da sorte", f: function () { return [
      "      .-~~~~~~-.",
      "     /          \\",
      "    |   \\/\\/\\/   |",
      "    |            |",
      "     \\          /",
      "      '-.____.-'",
      "",
      "!a sorte de hoje:",
      "  \"" + R(DADOS.frases) + "\"",
      "",
      "~quebre outro quando quiser."
    ] } },

    "gostos": { d: "o que eu curto", f: function () {
      var l = ["!coisas de que eu gosto hoje:"];
      Object.keys(GOSTOS).forEach(function (k) { l.push("  " + padR(k + ":", 9) + " " + pick(GOSTOS[k], 3).join(", ")) });
      l.push("", "~digite \"gostos\" de novo: a lista muda.");
      return l
    } },

    "ouvindo": { d: "o que está tocando", f: function () {
      if (!TRACKS.length) return ["?nada na fila."];
      var t = R(TRACKS), l = ["!tocando agora:", "  ♪ " + t[0] + " — " + t[1] + "  (" + t[2] + ")", "", "~na fila:"];
      pick(TRACKS.filter(function (x) { return x !== t }), 3).forEach(function (x) { l.push("  · " + x[0] + " — " + x[1]) });
      return l
    } },

    "diario": { d: "entradas recentes (use: ler N)", f: function () {
      var l = ["!diário, mais novas primeiro:"];
      DIARIO.forEach(function (e, i) { l.push("  [" + (i + 1) + "] " + e.d + "  humor " + (e.h < 10 ? " " : "") + e.h + "/10  " + e.t.slice(0, 38) + "…") });
      l.push("", "~use \"ler 2\" para abrir uma entrada.");
      return l
    } },

    "ler": { d: "abre uma entrada do diário", h: 1, f: function (a) {
      var n = parseInt(a, 10), e = DIARIO[n - 1];
      if (!e) return ["?entrada não encontrada. veja \"diario\"."];
      return ["!" + e.d + " · humor " + e.h + "/10", "", e.t]
    } },

    "projetos": { d: "coisas que eu fiz (use: abrir N)", f: function () {
      var l = ["!pasta /projetos:"];
      PR.forEach(function (p, i) { l.push("  [" + (i + 1) + "] " + padR(p[0].slice(0, 20), 22) + p[2]) });
      l.push("", "~use \"abrir 1\" para ver detalhes.");
      return l
    } },

    "abrir": { d: "abre um projeto", h: 1, f: function (a) {
      var p = PR[parseInt(a, 10) - 1];
      if (!p) return ["?projeto não encontrado. veja \"projetos\"."];
      return ["!" + p[0], "  " + p[1], "  status: " + p[2]]
    } },

    "contato": { d: "como falar comigo", f: function () { return [
      "!pode me escrever:",
      "  e-mail: " + P.email,
      "  rede:   " + P.rede,
      "",
      "~digite \"copiar\" para copiar o e-mail."
    ] } },

    "copiar": { d: "copia o e-mail", h: 1, f: function () {
      try { navigator.clipboard.writeText(P.email).then(function () { }, function () { }) } catch (e) { }
      return ["e-mail copiado (ou selecione o texto acima manualmente)."]
    } },

    "tema": { d: "muda a cor (verde, ambar, azul, branco, papel, neon, oitenta)", f: function (a) {
      if (!a) return ["!temas: " + TEMAS.join(", "), "~exemplo: tema papel"];
      a = a.toLowerCase().replace("â", "a").trim();
      var t = TEMA_APELIDOS[a];
      if (!t) return ["?tema desconhecido: " + a, "~temas: " + TEMAS.join(", ")];
      setTema(t); return ["tema " + t + " aplicado."]
    } },

    "som": { d: "liga/desliga os sons (som, som ligar, som desligar)", f: function (a) {
      a = (a || "").toLowerCase().trim();
      if (a === "ligar" || a === "on") {
        somDefinir(true); somBotaoAtualizar(); somBipe();
        return som.ligado
          ? ["!som ligado.", "~as teclas vão fazer barulho e cada comando termina com um bipe."]
          : ["?seu navegador não deixou ligar o som."];
      }
      if (a === "desligar" || a === "off") { somDefinir(false); somBotaoAtualizar(); return ["som desligado."] }
      var novo = somDefinir(!som.ligado);
      somBotaoAtualizar();
      if (novo) { somBipe(); return ["!som ligado.", "~as teclas vão fazer barulho e cada comando termina com um bipe."] }
      return ["~som desligado."];
    } },

    "descobertas": { d: "segredos que você já achou", f: function () {
      var n = Object.keys(found).length;
      return [
        "!segredos: " + barra(n, TOTAL) + "  " + n + "/" + TOTAL,
        "~dica: nem todo comando aparece na ajuda."
      ]
    } },

    "limpar": { d: "limpa a tela", f: function () { out.innerHTML = ""; return [] } },
    "data": { d: "mostra a data", h: 1, f: function () { return [new Date().toLocaleString("pt-BR")] } },
    "ls": { d: "lista", h: 1, f: function () { return ["sobre  quem-sou  livros  filmes  recado  quiz  jogos  fortuna  gostos  ouvindo  diario  projetos  contato"] } },

    "jogos": { d: "o que tem pra jogar", f: function () { return [
      "!jogos e brincadeiras:",
      "  forca       adivinhe a palavra, uma letra por vez",
      "  velha       jogo da velha contra a máquina",
      "  snake       a cobrinha, com as setas do teclado",
      "  adivinha    adivinhe o número que eu pensei",
      "  matrix      chuva de letras por alguns segundos",
      "  hack        uma invasão de mentirinha",
      "  fortuna     biscoito da sorte",
      "",
      "~e existe um código de teclas que libera uma surpresa."
    ] } },
    "forca": { d: "jogo da forca", f: forcaIniciar },
    "velha": { d: "jogo da velha contra a máquina", f: velhaIniciar },
    "snake": { d: "a cobrinha, com as setas do teclado", f: snakeRodar },
    "matrix": { d: "chuva de letras por alguns segundos", f: matrixRodar },
    "hack": { d: "invasão de mentirinha", f: hackRodar },

    /* --- segredos (não aparecem na ajuda) --- */
    "segredo": { d: "", h: 1, f: function () { var h = R(HAIKU); return ["!" + h[0], "!" + h[1], "!" + h[2]].concat(discover("segredo")) } },
    "sudo": { d: "", h: 1, f: function () { return ["?" + apelido + " não deixa você ser root aqui. boa tentativa."].concat(discover("sudo")) } },
    "cafe": { d: "", h: 1, f: function () { return [
      "   ( (", "    ) )", "  .______.", "  |      |]", "  \\      /", "   `----'", "", "servido. cuidado, está quente."
    ].concat(discover("cafe")) } },
    "adivinha": { d: "", h: 1, f: function () { return adivinhaIniciar().concat(discover("adivinha")) } },
    "oi": { d: "", h: 1, f: function () { return ["!oi. obrigado por vir até aqui.", "~pouca gente digita isso antes de qualquer comando."].concat(discover("oi")) } },
    "ping": { d: "", h: 1, f: function () { return [
      "PING " + apelido + " 56 bytes", "64 bytes: tempo=0.4ms", "64 bytes: tempo=0.3ms", "64 bytes: tempo=0.4ms",
      "", "--- " + apelido + " ping statistics ---", "3 pacotes, 0% de perda. tô aqui."
    ].concat(discover("ping")) } },
    "top": { d: "", h: 1, f: function () { return [
      "PID   PROCESSO            CPU   MEM",
      "  1   pensar              41%   12%",
      "  2   tomar café          33%    8%",
      "  3   abas abertas        19%   61%",
      "  4   dormir cedo          0%    0%",
      "",
      "~o processo 4 nunca roda."
    ].concat(discover("top")) } },
    "lua": { d: "", h: 1, f: function () {
      var ciclo = 29.53059, nova = Date.UTC(2000, 0, 6, 18, 14);
      var dias = (Date.now() - nova) / 86400000;
      var fase = ((dias % ciclo) + ciclo) % ciclo;
      var nomes = ["lua nova", "quarto crescente", "lua cheia", "quarto minguante"];
      var nomes2 = ["crescente", "cheia", "minguante", "nova"];
      var i = Math.floor((fase / ciclo) * 4 + 0.5) % 4;
      var desenho = ["  (   )  ", " (  ●  ) ", " ( ●●● ) ", " (  ●  ) "][i];
      return ["!fase da lua:", "", desenho, "", "  " + nomes[i] + " · " + Math.round(fase) + " dias de ciclo"].concat(discover("lua"));
    } },
    "arvore": { d: "", h: 1, f: function () { return [
      "        ,@@@@@@@,",
      "  ,,,.   ,@@@@@@/@@,  .oo8888o.",
      " ,&%%&%&&%,@@@@@/@@@@@@,8888\\88/8o",
      "%&\\%&&%&&%,@@@\\@@@/@@@88\\88888/88'",
      "%&&%&%&/%&&%@@\\@@/ /@@@88888\\88888'",
      "%&&%/ %&%%&&@@\\ V /@@' `88\\8 `/88'",
      "`&%\\ ` /%&'    |.|        \\ '|8'",
      "    |o|        | |         | |",
      "    |.|        | |         | |",
      " \\\\/ ._\\//_/__/  ,\\_//__\\\\/.  \\_//__/_"
    ].concat(discover("arvore")) } },
    "sair": { d: "", h: 1, f: function () { return ["~você pode sair quando quiser.", "~a porta não tem fechadura. só volte depois."].concat(discover("sair")) } },
    "konami": { d: "", h: 1, f: function () { return [
      "!↑ ↑ ↓ ↓ ← → ← → B A",
      "  código konami aceito. +30 vidas.",
      "",
      "        /\\  /\\",
      "       /  \\/  \\",
      "      |  o  o  |",
      "      |   ^    |",
      "       \\  ---  /",
      "        \\____/",
      "",
      "~arcade liberado. digite \"jogos\" pra ver o que tem."
    ] } }
  };
  var ORDER = Object.keys(CMDS);

  /* ---------- 11. Rodar um comando ---------- */
  var hist = [], hi = 0;

  async function run(raw) {
    var line = raw.trim();
    atualizarPrompt();
    echo(raw);
    if (!line) return;
    hist.push(line); hi = hist.length;

    var parts = line.split(/\s+/), cmd = parts[0].toLowerCase(), arg = parts.slice(1).join(" ");

    if (modo) { await print(responderModo(line)); atualizarPrompt(); return }

    if (CMDS[cmd]) { await print(await CMDS[cmd].f(arg)); atualizarPrompt(); return }

    var near = ORDER.filter(function (k) { return !CMDS[k].h && k.indexOf(cmd) === 0 });
    await print(["?comando não encontrado: " + cmd + (near.length ? "  (quis dizer \"" + near[0] + "\"?)" : "  — digite \"ajuda\"")]);
  }

  /* ---------- 12. Entrada do teclado ---------- */
  var busyDesde = 0;
  inp.addEventListener("keydown", function (e) {
    if (inp.readOnly) return;
    if (!busy) somTecla();
    if (busy) skip = true;

    if (e.key === "Enter") {
      e.preventDefault();
      if (busy) {
        /* rede de segurança: se algo travar a saída, apertar Enter por uns
           segundos destrava o terminal (e destrava também o modo de jogo) */
        if (!busyDesde) busyDesde = Date.now();
        if (Date.now() - busyDesde > 6000) { busy = false; skip = false; inp.readOnly = false; busyDesde = 0 }
        return;
      }
      busyDesde = 0;
      var v = inp.value; inp.value = ""; run(v);
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); if (hi > 0) { hi--; inp.value = hist[hi] || "" }
    } else if (e.key === "ArrowDown") {
      e.preventDefault(); if (hi < hist.length - 1) { hi++; inp.value = hist[hi] } else { hi = hist.length; inp.value = "" }
    } else if (e.key === "Tab") {
      e.preventDefault();
      var v = inp.value.toLowerCase(); if (!v) return;
      var m = ORDER.filter(function (k) { return !CMDS[k].h && k.indexOf(v) === 0 });
      if (m.length === 1) inp.value = m[0] + " ";
    }
  });

  $("#screen").addEventListener("click", function (e) {
    if (e.target.closest("button")) return;
    var sel = window.getSelection && String(window.getSelection());
    if (!sel) inp.focus();
  });

  /* ---------- 13. Atalhos para quem não quer digitar ---------- */
  var chips = $("#chips");
  ["ajuda", "sobre", "livros", "filmes", "recado", "quiz", "jogos", "fortuna", "projetos", "contato", "tema"].forEach(function (c) {
    var b = document.createElement("button");
    b.type = "button"; b.textContent = c;
    b.addEventListener("click", function () { if (busy) { skip = true; return } run(c) });
    chips.appendChild(b);
  });

  /* botão do som (fica sempre no fim, mostrando se está ligado) */
  botaoSom = document.createElement("button");
  botaoSom.type = "button";
  botaoSom.addEventListener("click", function () {
    if (som.ligado) { somDefinir(false); somBotaoAtualizar(); return }
    if (busy) return;
    run("som");
  });
  chips.appendChild(botaoSom);
  somBotaoAtualizar();

  /* ---------- 14. Boot ---------- */
  (async function () {
    atualizarPrompt();

    var logo = document.createElement("div");
    logo.className = "logo";
    logo.setAttribute("aria-label", "Terminal de " + P.nome);
    var suf = document.createElement("span");
    suf.textContent = "." + DADOS.sistema;
    logo.textContent = apelido.toUpperCase();
    logo.appendChild(suf);
    out.appendChild(logo);

    await print([
      "BIOS v1.0 — teste de memória .......... 64K OK",
      "procurando dispositivos ............... 1 teclado, 1 café",
      "montando /home/" + apelido + " ............... OK",
      "carregando lembranças ................. OK",
      "iniciando modo fósforo ................ OK"
    ]);
    if (!reduce) await esperar(300);

    await print([
      "",
      "~versão 1.3 · último acesso: " + new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" }),
      "",
      "!Bem-vindo ao quarto de " + P.nome.split(" ")[0] + " na internet.",
      "Aqui você não clica em menus. Digite um comando e aperte Enter.",
      "Ou toque nos atalhos lá embaixo.",
      "",
      "~digite \"ajuda\" para começar."
    ]);

    if (!("ontouchstart" in window)) inp.focus();
  })();
})();
