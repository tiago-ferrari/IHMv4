document.addEventListener("DOMContentLoaded", function() {
    const botaoCustomizado = document.getElementById("enviarBtn");
    const aguardePopup = document.getElementById("aguardePopup");
    const sucessoPopup = document.getElementById("sucessoPopup");

    botaoCustomizado.addEventListener("click", function(event) {
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
        }, 4000);
    });
});
