const Name = document.getElementById("nombre")
const lastName = document.getElementById("apellido")
const user = document.getElementById("username")
const mail = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const form = document.getElementById("register-form")
const login = document.getElementById("loginForm")
const parrafo = document.getElementById("warnings") 

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = "<BR>"
    let entrar = false
    parrafo.innerHTML = "";
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/
    let regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/
    if (Name.value.length > 50) {
        warnings += "El nombre es demasiado largo <br>"
        entrar = true
    } 
    console.log(regexEmail.test(mail.value))
    if (!regexEmail.test(mail.value)) {
        warnings += "El email no es valido <br>"
        entrar = true
    }
    if (!regexPassword.test(password.value)) { // Aquí corregimos regexPassword.test(password)
        warnings += "La contraseña no es valida <br> utiliza al menos una letra mayuscula, numeros y caracteres especiales"
        entrar = true;
    } 
    if (confirmPassword.value != password.value) {
        warnings += "Verifica la contraseña <br>"
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings
    }
})

login.addEventListener("submit", e =>{
    e.preventDefault()
    let warnings = "<BR>"
    let entrar = false
    parrafo.innerHTML = "";
    if (user != "Usuario registrado en la base de datos") {
        warnings += "El nombre de usuario no existe <br>"
        entrar = true
    } 
    if (password != "Contraseña del User"){
        warnings+= "La contraseña no es valida"
    }
    if( entrar){
        parrafo.innerHTML = warnings
    }
})