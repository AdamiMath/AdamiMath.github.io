var envio = document.getElementById("botao");

function formatarTelefone(telefone) {
  const regex = /^(\d{2})(\d{4,5})(\d{4})$/;
  const matches = telefone.match(regex);

  if (matches) {
    return `(${matches[1]}) ${matches[2]}-${matches[3]}`;
  }

  return telefone;
}

// Função para validar e formatar o input
function validarTelefoneInput() {
  const input = document.getElementById("telefone");
  const valor = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const telefoneFormatado = formatarTelefone(valor);

  input.value = telefoneFormatado;
}

// Adicionar um ouvinte de evento para o evento 'input'
const inputTelefone = document.getElementById("telefone");
inputTelefone.addEventListener("input", validarTelefoneInput);

function mostrarConfirmacao() {
  var formulario = document.getElementById("meuFormulario");
  var confirmacao = document.getElementById("confirmacao");
  confirmacao.style.display = "flex";
}

function validarFormulario() {
  var nome = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var empresa = document.getElementById("empresa").value;
  var mensagemErro = document.getElementById("mensagemErro");

  // Verifica se o campo "nome" está vazio
  if (nome === "") {
    mensagemErro.innerHTML = "Por favor, preencha o campo Nome.";
    return false;
  }

  if (empresa === "") {
    mensagemErro.innerHTML = "Por favor, informe o nome da sua empresa.";
    return false;
  }

  // Verifica se o campo "email" está vazio
  if (email === "") {
    mensagemErro.innerHTML = "Por favor, preencha o campo E-mail.";
    return false;
  }

  // Verifica se o campo "telefone" está vazio
  if (telefone === "") {
    mensagemErro.innerHTML = "Por favor, preencha o campo Telefone.";
    return false;
  }

  // Verifica se o campo "telefone" contém apenas números e tem 10 dígitos
  // var telefoneValido = /^\d{10}$/.test(telefone);
  // if (!telefoneValido) {
  //     mensagemErro.innerHTML = "Por favor, insira um número de telefone válido (10 dígitos).";
  //     return false;
  // }

  // Se todos os campos estiverem preenchidos corretamente, o formulário é enviado
  mensagemErro.innerHTML = "";

  mostrarConfirmacao();

  return true;
}
