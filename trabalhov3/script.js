/*const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});*/


/*
document.getElementById("enviarBtn").addEventListener("click", function(event) {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Altera o texto do botão para "Aguarde..."
  this.value = "Aguarde...";

  // Simula o envio do formulário com um atraso de 3 segundos
  setTimeout(function() {
    // Altera o texto do botão para "Enviado com sucesso"
    document.getElementById("mensagem").textContent = "Enviado com sucesso";
  }, 3000);
});*/

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const enviarBtn = document.getElementById("enviarBtn");
  const aguardePopup = document.getElementById("aguardePopup");
  const sucessoPopup = document.getElementById("sucessoPopup");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Exibir balão de "Aguarde..." no topo da tela
      aguardePopup.style.top = "0";
      aguardePopup.style.opacity = "1";

      // Esconder o balão de "Aguarde..." após 3 segundos
      setTimeout(function() {
          aguardePopup.style.opacity = "0";
      }, 3000);

      // Simular um atraso para a mensagem de sucesso (apenas para demonstração)
      setTimeout(function() {
          // Exibir balão de "Mensagem Enviada com Sucesso!" no topo da tela
          sucessoPopup.style.top = "0";
          sucessoPopup.style.opacity = "1";

          // Esconder o balão de sucesso após mais 3 segundos
          setTimeout(function() {
              sucessoPopup.style.opacity = "0";
          }, 3000);
      }, 4000); // Tempo simulado para a mensagem ser enviada com sucesso
  });
});




