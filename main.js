let form = document.getElementById('formNumbers');

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let numberA = document.getElementById('numA').value;
    let numberB = document.getElementById('numB').value;
    
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const msgSucesso = `<b>Parabéns, número B (${numB}) é maior que o número A (${numA}).</b>`
    const msgErro = `<b>O número B (${numB}) precisa ser maior que o número A (${numA}).</b>`
    let multiplication = numA * numB;

    if (numA >= numB) {
        document.getElementById('messageError').innerHTML = msgErro;  
        document.querySelector('.msgDeErro').style.display = 'block';
        document.querySelector('.msgSuccess').style.display = 'none';
        document.getElementById('resultado').innerHTML = '';
    } else {
        document.getElementById('messageSuccess').innerHTML = msgSucesso;        
        document.querySelector('.msgDeErro').style.display = 'none';
        document.querySelector('.msgSuccess').style.display = 'block';
        document.getElementById('resultado').innerHTML = multiplication;
    }
})