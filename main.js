const form = document.querySelector('#form')
const nameForm = document.querySelector('#name')
const email = document.querySelector('#email')
const cel = document.querySelector('#tel')
const password = document.querySelector('#password')
const btnEnviar = document.querySelector('#btn')

const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(nameForm.value === "" || !emailValidate.test(email.value) || cel.value === "" || !passwordValidate.test(password.value)){
        Swal.fire(
            'Datos incorrectos',
            'El correo o contraseña ingresado es incorrecto, vuelva a ingresar sus datos!',
            'error'
        )
    }else{
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        Swal.fire(
            'Gracias!',
            'El proceso se ha realizado correctamente',
            'success'
        )
        console.log(JSON.stringify(data))
    }
    
})










