const form = document.querySelector('#form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const cel = document.querySelector('#tel')
const password = document.querySelector('#password')
const btnEnviar = document.querySelector('#btn')

const emailValidate = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';
const passwordValidate = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'

// form.addEventListener('submit', (e) => {
//     if(email != emailValidate || cel != Number || password != passwordValidate){
//         e.preventDefault()
//         // console.log('datos invalidos')
//     }else{
//         // e.preventDefault()
//         const data = Object.fromEntries(
//             new FormData(e.target)
//         )
//         console.log(JSON.stringify(data))
//     }
// })

form.addEventListener('submit', (e) => {
    if(email != emailValidate || cel != Number() || password != passwordValidate){
        e.preventDefault()
        console.log('datos invalidos')
    }else{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(JSON.stringify(data))
    }
})










