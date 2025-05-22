// Executes on index.html deffer

const initialState = "div-home"
const statesToAdd = ["login-body", "nova-conta", "div-home"]

let currentState
let states = new Map()

function ready() {

	for (id of statesToAdd) {
		let element = document.getElementById(id)

		states.set(id, element)
		element.style.display = "none"
	}

	changeStateTo(initialState)

}

function changeStateTo(stateId) {

	if (currentState instanceof HTMLElement) {
		currentState.style.display = "none"
	}

	currentState = states.get(stateId)

	currentState.style.display = "block"
	// console.log(typeof currentState.enter === "function")
	// if (currentState.hasOwnProperty("enter") && typeof currentState.enter === "function"){
	// 	currentState.enter() // Possible enter function
	// }

}

ready()

// End of ready

// Page Logic

let login = {
	email: document.getElementById("login-email"),
	password: document.getElementById("login-password"),
	enterButton: document.getElementById("botaoLogin")
}

function mostrarApenasLogin() {
	login.email.value = ""
	login.password.value = ""

	changeStateTo("login-body")
}

function checkLoginInputs(){
	let filled = false

	if (login.email.value.includes("@") && login.password.value.length > 0) {
		filled = true
	}

	if (filled) {
		login.enterButton.disable = false
		// console.log("Filled!")
	} else {
		login.enterButton.disable = true
		// console.log("not filled...")
	}
}

function mostrarApenasHome() {
	changeStateTo("div-home")
}
