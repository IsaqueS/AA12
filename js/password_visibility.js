
let passwordVisible = document.getElementById('login-password').type == 'text' ? true : false // Make sure the value always starts right
// console.log(passwordVisible)

function changePasswordVisibility() {
    if (passwordVisible){
        ocultarSenha()
    } else {
        mostrarSenha()
    }
}

function mostrarSenha() {
    document.getElementById('login-password').type = 'text';
    passwordVisible = true
}

function ocultarSenha() {
    document.getElementById('login-password').type = 'password';
    passwordVisible = false
    console.log("adeus")
}