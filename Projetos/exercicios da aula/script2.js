function cronometro() {
    let numero = parseInt(prompt("Escolha Cronometro (1) ou Temporizador (2) "));
    document.getElementById('demo').innerHTML = '';
    document.getElementById('demo2').innerHTML = '';
    let pai = document.getElementById('demo');
    switch (numero) {
        case 1:

            var minutos = parseInt(prompt("Digite os minutos"));
            if (minutos < 60) {
                for (let contador = minutos; contador < 60; contador++) {
                    for (let segundos = 0; segundos < 60; segundos++) {
                        let elemento = document.createElement('br');
                        let conteudo = document.createTextNode(contador + ":" + segundos);
                        pai.appendChild(conteudo);
                        pai.appendChild(elemento);
                    }
                }
            } else {
                document.getElementById('demo2').innerHTML = "A partir de 60 minutos é uma hora"
            }
            break;
        case 2:
            var minutos = parseInt(prompt("Digite os minutos"));
            if (minutos < 60) {
                for (contador = minutos; contador >= 0; contador--) {
                    for (segundos = 59; segundos >= 0; segundos--) {
                        let elemento = document.createElement('br');
                        let conteudo = document.createTextNode(contador + ":" + segundos);
                        pai.appendChild(conteudo);
                        pai.appendChild(elemento);

                    }
                }
            } else {
                document.getElementById('demo2').innerHTML = "A partir de 60 minutos é uma hora"
            }
            break;

    }
}