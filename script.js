const a = document.getElementById('calc01');
const b = document.getElementById('calc02');
const result = document.getElementById('result');
const message = document.getElementById('msg');
const resButton = document.getElementById('res'); 

let isCalculated = false; 

function res() {
    if (isCalculated) {
        a.value = '';
        b.value = '';
        result.innerHTML = '';
        message.innerHTML = '';
        
        document.getElementById('Link').style.display = 'none';
        document.getElementById('result-container').style.opacity = 0;
        document.getElementById('msg').style.opacity = 0;
        
        a.disabled = false;
        b.disabled = false;
        
        resButton.value = 'Resultado';

        isCalculated = false;
    } else {
        let valora = parseFloat(a.value);
        let valorb = parseFloat(b.value);

        if (isNaN(valora) || isNaN(valorb)) {
            result.textContent = "Erro";
            message.innerHTML = "Campos não preenchidos, por favor assinalar ambos.";
        } else {
            let calc = valora / (valorb ** 2);
            let calcFormatado = calc.toFixed(1);

            result.innerHTML = `<span style="color: ${getColor(calcFormatado)};">${calcFormatado}</span>`;

            if (calcFormatado <= 18.4) {
                message.innerHTML = "Peso abaixo do ideal, procure se alimentar melhor, para mais informações acesse o link abaixo. ⬇️<br> Para fazer um novo cálculo, clique em &quotRestaurar&quot";
            } else if (calcFormatado >= 18.5 && calcFormatado <= 24.9) {
                message.innerHTML = "Parabéns! Você está no peso ideal. Para mais informações acesse o link abaixo. ⬇️<br> Para fazer um novo cálculo, clique em &quotRestaurar&quot";
            } else if (calcFormatado >= 25 && calcFormatado <= 29.9) {
                message.innerHTML = "Peso acima do ideal. Procure fazer exercícios físicos e comer mais frutas. Para mais informações clique no link abaixo. ⬇️<br> Para fazer um novo cálculo, clique em &quotRestaurar&quot";
            } else if (calcFormatado >= 30 && calcFormatado <= 34.9) {
                message.innerHTML = "Obesidade grau 1. Procure um nutricionista para cuidar da saúde, confira mais informações abaixo. ⬇️<br> Para fazer um novo cálculo, clique em &quotRestaurar&quot";
            } else if (calcFormatado >= 35.0 && calcFormatado <= 39.9) {
                message.innerHTML = "Obesidade grau 2. É recomendado a consulta de um nutricionista, para mais informações clique no link abaixo. ⬇️<br> Para fazer um novo cálculo, clique em &quotRestaurar&quot";
            } else if (calcFormatado >= 40.0) {
                message.innerHTML = "Obesidade grau 3. É altamente recomendado uma consulta ao nutricionista! Para mais informações clique no link abaixo. ⬇️<br> Para fazer um novo cálculo, clique em &quotRestaurar&quot";
            }

            document.getElementById('Link').style.display = 'block';
            document.getElementById('result-container').style.opacity = 1;
            document.getElementById('msg').style.opacity = 1;
            
            a.disabled = true;
            b.disabled = true;
            
            resButton.value = 'Restaurar';

            isCalculated = true;
        }
    }
}

function getColor(calcFormatado) {
    if (calcFormatado <= 18.4) {
        return "#F29202"; 
    } else if (calcFormatado >= 18.5 && calcFormatado <= 24.9) {
        return "#30E67E"; 
    } else if (calcFormatado >= 25 && calcFormatado <= 29.9) {
        return "#30E67E"; 
    } else if (calcFormatado >= 30 && calcFormatado <= 34.9) {
        return "#F5F247"; 
    } else if (calcFormatado >= 35.0 && calcFormatado <= 39.9) {
        return "#F29202"; 
    } else {
        return "#DB1100";
    }
}
