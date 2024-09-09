// Variáveis globais para referenciar o elemento de exibição e os botões
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// Loop para adicionar um ouvinte de evento a cada botão
for (item of btn) {
  item.addEventListener('click', e => {
    // Obtém o texto do botão clicado
    btntext = e.target.innerText;

    // Substitui os símbolos de multiplicação e divisão pelos respectivos operadores matemáticos
    if (btntext == '×') {
      btntext = '*';
    }
    if (btntext == '÷') {
      btntext = '/';
    }

    // Concatena o texto do botão ao valor atual no display
    screen.value += btntext;
  });
}

// Funções para calcular operações matemáticas
function sin() {
  // Calcula o seno do valor atual e atualiza o display
  screen.value = Math.sin(screen.value);
}

// ... outras funções matemáticas (cos, tan, pow, sqrt, log) com comentários semelhantes

// Funções para inserir constantes
function pi() {
  // Insere o valor de pi no display
  screen.value = 3.141592653589793;
}

function e() {
  // Insere o valor de e no display
  screen.value = 2.718281828459045235360287;
}

// Função para calcular o fatorial
function fact() {
  // Inicializa as variáveis para o cálculo do fatorial
  var i, num, f;
  f = 1;
  num = screen.value;

  // Calcula o fatorial usando um loop
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  // Atualiza o display com o resultado
  screen.value = f;
}

// Função para apagar o último caractere do display
function backspc() {
  // Remove o último caractere do valor atual no display
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
