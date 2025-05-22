// CPF code starts

function haOnzeDigitos(cpf) {
    if (String(cpf).length == 11) {
        return true
    }
    return false
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    if (!isNaN(cpf)) {
        return true
    }
    return false
}

function osOnzeNumerosSaoDiferentes(cpf) {
    const cpfString = String(cpf)
    const firstChar = cpfString.charAt(0)

    for (let i = 1; i < cpf.length; i++) {
        // console.log(cpfString.charAt(i));
        if (cpfString.charAt(i) != firstChar){
            return true
        }
    }

    return false
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    const cpfArray = String(cpf).split("")

    let soma = 0
    let multiplicador = 2

    for (let i = 8; i > -1; i--) {
        // console.log(`Index: ${i}, Number: ${cpfArray[i]}, Multiplicador: ${multiplicador}, Soma: ${soma}`)
        soma += + (Number(cpfArray[i]) * multiplicador)
        multiplicador++
    }

    let resto = (soma*10)%11

    if (resto == 10){
        resto = 0
    }

    if (resto == cpfArray[9]){
        return true
    }


    return false
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    const cpfArray = String(cpf).split("")

    let soma = 0
    let multiplicador = 2

    for (let i = 9; i > -1; i--) {
        // console.log(`Index: ${i}, Number: ${cpfArray[i]}, Multiplicador: ${multiplicador}, Soma: ${soma}`)
        soma += + (Number(cpfArray[i]) * multiplicador)
        multiplicador++
    }

    let resto = (soma*10)%11

    if (resto == 10){
        resto = 0
    }

    if (resto == cpfArray[10]){
        return true
    }
    return false
}

function validarCPF(cpf) {
    let conditions = []

    // console.log(cpf)

	conditions.push(
		haOnzeDigitos(cpf),
		todosOsOnzeDigitosSaoNumeros(cpf),
		osOnzeNumerosSaoDiferentes(cpf),
		oPrimeiroDigitoVerificadorEhValido(cpf),
		oSegundoDigitoVerificadorEhValido(cpf)
	)

    // console.log(conditions)
    // console.log(conditions.every(item => item == true))

	// return conditions.every(item => item == true)

    form.cpf = conditions.every(item => item == true)

    return form.cpf
}

function isEmpty(value, object) {
    value = String(value);
    if (value.length > 0) {
        form[object] = true
    } else {
        form[object] = false
    }

    // console.log(form)
    return form[object]
}

// CPF code ends

let form = {
    cpf: false,
    sobrenome: false,
    nome: false,
    password: false
}

function mostrarApenasConta() {
	changeStateTo("nova-conta")
}


function isEmail(value, object) {
    value = String(value);
    if (value.includes("@")) {
        form[object] = true
    } else {
        form[object] = false
    }

    return form[object]
    // console.log(form)
}

function printState () {
    console.log(form)
}

const validStatusText = "✅"
const invalidStatusText = "❗"

function statusText(textId, value){
    text = document.getElementById(textId)
    // console.log(text)
    // console.log(value)
    if (value) {
        text.textContent = validStatusText
    } else {
        text.textContent = invalidStatusText
    }
}

const passwordInputs = [document.getElementById("password1"),document.getElementById("password2")] // Não deu tempo :P

function isPasswordCorrect() {
    
    // for (text of passwordInputs) {
    //     console.log(text.value)
    // }

    if (passwordInputs[0].value == passwordInputs[1].value) {
        return true
    } else {
        return false
    }
}

