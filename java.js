var numeroCorreto;
    var tentativas;
    var pontuacaoMaxima;

    function iniciarJogo() {
      numeroCorreto = Math.floor(Math.random() * 101);
	  console.log(numeroCorreto)
      tentativas = 0;
      pontuacaoMaxima = 100;

      var mensagemResultado = document.getElementById("mensagemResultado");
      var pontuacaoDisplay = document.getElementById("pontuacao");

      mensagemResultado.textContent = "";
      pontuacaoDisplay.textContent = "";

      var inputAdivinhacao = document.getElementById("guessInput");
      inputAdivinhacao.disabled = false;
      inputAdivinhacao.value = "";
      inputAdivinhacao.focus();
    }

    function verificarAdivinhacao() {
      var inputAdivinhacao = document.getElementById("guessInput");
      var adivinhacao = parseInt(inputAdivinhacao.value);
      var mensagemResultado = document.getElementById("mensagemResultado");
      var pontuacaoDisplay = document.getElementById("pontuacao");

      if (isNaN(adivinhacao) || adivinhacao < 0 || adivinhacao > 100) {
        mensagemResultado.textContent = "Digite um número válido entre 0 e 100.";
      } else {
        tentativas++;
        var diferenca = Math.abs(numeroCorreto - adivinhacao);
        var pontuacao = pontuacaoMaxima - (tentativas - 1);

        if (adivinhacao === numeroCorreto) {
          mensagemResultado.textContent = "Parabéns! Você acertou o número!";
          pontuacaoDisplay.textContent = "Pontuação: " + pontuacao;
          inputAdivinhacao.disabled = true;
		} else {
		if (adivinhacao > numeroCorreto) {
		mensagemResultado.textContent = "Tente um número menor.";
		} else {
		mensagemResultado.textContent = "Tente um número maior.";
		}
		inputAdivinhacao.value = "";
		inputAdivinhacao.focus();
		}
		}
		}