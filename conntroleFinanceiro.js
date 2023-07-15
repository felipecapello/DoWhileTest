  let valorInicial = prompt("Digite sua quantidade inicial de dinheiro")
  valorInicial = parseFloat(valorInicial)

do {
   opcao = prompt("Seu valor inicial é: " + valorInicial + "\n Digite a opção 1 para ADICIONAR DINHEIRO e opção 2 para REMOVER DINHEIRO e 3 para sair do programa")
   
   switch (opcao){
    case "1":
       let somar = prompt("Quanto deseja adicionar ao seu saldo?")
       somar = parseFloat(somar)
      valorFinal = valorInicial + somar;
      valorInicial = valorFinal
      alert("Após adicionar " + somar + " o valor resultando foi " + valorFinal)
    break
    case "2":
      subtrair = prompt("Quanto deseja retirar do seu saldo?")
      valorFinal = valorInicial - subtrair;
      alert("Após substrair " + subtrair + " o valor resultando foi " + valorFinal)
      valorInicial = valorFinal
    break
    case "3":
      alert("Encerrando programa!")
   }

} while (opcao != "3");