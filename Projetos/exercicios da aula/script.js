function exercicio14() {
    alert("Sistema de verificação se o numero é maior ou menor que 10")
    let num = prompt("Digite um numero:");
    if (num > 10) {
        alert("O numero " + num + " é maior que 10")
    }
    else {
        alert("o numero " + num + " é menor que 10")
    }
}

function exercicio15() {
    alert("Sistema de verificação de positivos e negativos")
    let numero = prompt("Digite um numero: ");
    if (numero >= 0) {
        alert(numero + " é um numero positivo")
    }
    else {
        alert(numero + " é um numero negativo")
    }
}

function exercicio16() {
    alert("mostrar uma soma de 2 valores")
    let numero = parseInt(prompt("Digite o 1º valor: "))
    let numero2 = parseInt(prompt("Digite o 2º valor: "))
    let soma = numero + numero2
    alert(soma)
}

function exercicio13faact() {
    alert("Sistema de Média com pesos: (2,3 e 5)")
    let not1 = parseFloat(prompt("1º nota: "))
    let not2 = parseFloat(prompt("2º nota: "))
    let not3 = parseFloat(prompt("3º nota: "))
    let mediaF = (not1 * 2 + not2 * 3 + not3 * 5) / 10
    alert("Media: " + mediaF)
}

function Soma() {
    alert("Soma de 2 valores que você escolhe lindão(lindona)")
    let num1 = parseInt(prompt("Digite o 1º valor: "))
    let num2 = parseInt(prompt("Digite o 2º valor: "))
    let soma = num1 + num2
    alert("Resultado da Soma: " + soma)
}

function Sub() {
    alert("Subtração de 2 valores que você escolhe lindão(lindona)")
    let num1 = parseInt(prompt("Digite o 1º valor: "))
    let num2 = parseInt(prompt("Digite o 2º valor: "))
    let sub = num1 - num2
    alert("Resultado da Subtração: " + sub)
}

function Multi() {
    alert("Multiplicação de 2 valores que você escolhe lindão(lindona)")
    let num1 = parseInt(prompt("Digite o 1º valor: "))
    let num2 = parseInt(prompt("Digite o 2º valor: "))
    let mult = num1 * num2
    alert("Resultado da Multiplicação: " + mult)
}

function Divi() {
    alert("Divisão de 2 valores que você escolhe lindão(lindona)")
    let num1 = parseInt(prompt("Digite o 1º valor: "))
    let num2 = parseInt(prompt("Digite o 2º valor: "))
    let divi = num1 / num2
    //alert (typeof(divi)) mostra a classificação da variavel.
    alert("Resultado da Divisão: " + divi.toFixed(2))
}

function Fibo() {
    let num = 1
    let num2 = 1
    let cont = 1

    alert(num)
    alert(num2)

    while (cont < 16) {
        let num3 = num + num2
        num = num2
        num2 = num3

        alert(num3)
        cont = cont + 1

    }
}

function macas() {
    alert("Função de compra de maças, se a quantidade for maior que 12 custa: 1.30 se a quantidade for menor custa: 1 cada")
    let quantM = parseInt(prompt("Quantas maças você comprou?"))
    if (quantM < 12) {
        let valorM = 1.30
        let valorT = valorM * quantM
        alert(valorT)
    }
    else {
        let valorM = 1
        let valorT = valorM * quantM
        alert(valorT)
    }
}

function tresifs() {
    alert("Verificar se o numero digitado é neutro(0), positivo ou negativo")
    let num = parseInt(prompt("Digite um Numero:"))
    if (num > 0) {
        alert("O numero Digitado é positivo")
    }
    else if (num == 0) {
        alert("O numero Digitado é neutro")

    }
    else {
        alert("O numero Digitado é negativo")
    }
}

function exSwitchCase() {
    alert("Função de escolha caso, digite 1 para bom dia, 2 para boa tarde e 3 para boa noite")
    let num = parseInt(prompt("Digite um numero"))
    switch (num) {
        case 1:
            alert("Bom Dia")
            break;
        case 2:
            alert("Boa Tarde")
            break;
        case 3:
            alert("Boa Noite")
            break;
        default:
            alert("Acho que não temos mais algo dps de boa notche")
            break;
    }
}

function lacoEnquanto() {
    let cont = 0;
    while (cont < 10) {
        alert(cont)
        cont++
    }
}

function meses() {
    let num = parseInt(prompt("Digite um numero de 1 a 12 para mostrar o mes"))
    switch (num) {
        case 1:
            document.getElementById("mesesano").innerHTML = "Janeiro"
            break;

        case 2:
            document.getElementById("mesesano").innerHTML = "Fevereiro"
            break;

        case 3:
            document.getElementById("mesesano").innerHTML = "Março"
            break;

        case 4:
            document.getElementById("mesesano").innerHTML = "Abril"
            break;

        case 5:
            document.getElementById("mesesano").innerHTML = "Maio"
            break;

        case 6:
            document.getElementById("mesesano").innerHTML = "Junho"
            break;

        case 7:
            document.getElementById("mesesano").innerHTML = "Julho"
            break;

        case 8:
            document.getElementById("mesesano").innerHTML = "Agosto"
            break;

        case 9:
            document.getElementById("mesesano").innerHTML = "Setembro"
            break;

        case 10:
            document.getElementById("mesesano").innerHTML = "Outubro"
            break;

        case 11:
            document.getElementById("mesesano").innerHTML = "Novembro"
            break;

        case 12:
            document.getElementById("mesesano").innerHTML = "Dezembro"
            break;

        default:
            document.getElementById("mesesano").innerHTML = "What? O ano só tem 12 meses filhão"
            break;
    }
}

function multate10(){
    let valor = parseInt(prompt("Digite um numero"))
    let cont = 0
    cont=1
    document.getElementById("tabuada").innerHTML="";

    let elementPai=document.getElementById("tabuada");

    while(cont<=10){
        let resultado =(valor*cont)
        let elemento = document.createElement('br');
        let conteudo = document.createTextNode(valor + "x" + cont + "=" + resultado);
        
        elementPai.appendChild(conteudo);
        elementPai.appendChild(elemento);
        /*document.getElementById("tabuada").innerHTML=resultado*/
        cont++
    }
}

function Media(){
    alert("Media de 2 notas");
    let nota1,nota2,media;
    do{
        nota1=parseFloat(prompt("Digite o valor da Primeira nota: "));
    }while (nota1<0 || nota1>10);

    do{
        nota2=parseFloat(prompt("Digite o valor da Segunda nota: "));
    }while (nota2<0 || nota2>10);

    media=(nota1+nota2)/2
    alert("A média vai ser igual a: " + media);
    
    
}



