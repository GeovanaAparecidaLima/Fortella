// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
      alert("Preencha todos os campos!");
    } else {
      alert(`Login realizado com sucesso!\nE-mail: ${email}`);
      // Redirecionar para página principal
      // window.location.href = "dashboard.html";
    }
  });
}

// CADASTRO
const cadastroForm = document.getElementById("cadastroForm");
if (cadastroForm) {
  cadastroForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("cadNome").value;
    const genero = document.getElementById("cadGenero").value;
    const telefone = document.getElementById("cadTelefone").value;
    const email = document.getElementById("cadEmail").value;
    const senha = document.getElementById("cadSenha").value;
    const confirmaSenha = document.getElementById("cadConfirmaSenha").value;

    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (nome === "" || email === "" || senha === "") {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    alert(`Cadastro realizado com sucesso!\nBem-vindo(a), ${nome}`);
    // Depois do cadastro, você pode redirecionar para login
    // window.location.href = "index.html";
  });
}

function cadastrar() {
  window.location.href = "cadastro.html"; // abre a tela de cadastro
}
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    window.location.href = "cadastro.html"; 
  });
  // Menu lateral
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.right === "0px") {
      menu.style.right = "-250px";
    } else {
      menu.style.right = "0px";
    }
  }
  
  