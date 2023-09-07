const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})

function converterComprimento() {
    const valor = parseFloat(document.getElementById("comprimentoValor").value);
    const de = document.getElementById("deComprimento").value;
    const para = document.getElementById("paraComprimento").value;

    let resultado;

    if (de === "cm" && para === "m") {
        resultado = valor / 100;
    } else if (de === "cm" && para === "km") {
        resultado = valor / 100000;
    } else if (de === "m" && para === "cm") {
        resultado = valor * 100;
    } else if (de === "m" && para === "km") {
        resultado = valor / 1000;
    } else if (de === "km" && para === "cm") {
        resultado = valor * 100000;
    } else if (de === "km" && para === "m") {
        resultado = valor * 1000;
    } else {
        resultado = valor;
    }

    document.getElementById("resultadoComprimento").textContent = `Resultado: ${resultado} ${para}`;

    const historico = document.getElementById("historico");
        const historicoItem = document.createElement("li");
        historicoItem.textContent = `${valor} ${de} = ${resultado} ${para}`;
        historico.appendChild(historicoItem);
    }

        function converterMassa() {
        const valor = parseFloat(document.getElementById("massaValor").value);
        const de = document.getElementById("deMassa").value;
        const para = document.getElementById("paraMassa").value;
    
        let resultado2;
    
        if (de === "mg" && para === "g") {
            resultado = valor / 100;
        } else if (de === "mg" && para === "kg") {
            resultado = valor / 100000;
        } else if (de === "g" && para === "mg") {
            resultado = valor * 100;
        } else if (de === "g" && para === "kg") {
            resultado = valor / 1000;
        } else if (de === "kg" && para === "mg") {
            resultado = valor * 100000;
        } else if (de === "kg" && para === "g") {
            resultado = valor * 1000;
        } else {
            resultado = valor;
        }
    
        document.getElementById("resultadoMassa").textContent = `Resultado: ${resultado} ${para}`;
    
        const historico = document.getElementById("historico");
            const historicoItem = document.createElement("li");
            historicoItem.textContent = `${valor} ${de} = ${resultado} ${para}`;
            historico.appendChild(historicoItem);
        }