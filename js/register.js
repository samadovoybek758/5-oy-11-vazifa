import { validate } from "./function.js";

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re_password');
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')




btn && btn.addEventListener('click',function (el) {
    el.preventDefault()

    const isValid = validate(username,email,password,rePassword)

    if (!isValid) {
        return
    }

    let user ={
        username : username.value,
        email : email.value,
        password : password.value,
    }

    btn.innerHTML = 'pending...';
    btn.setAttribute('disabled',true)

    fetch("https://auth-rg69.onrender.com/api/auth/signup",{
        method : "POST",
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(function (data) {

       if (data.message == "Failed! Username is already in use!") {
        alert('bu usernameda oydalanilgan');
        username.focus()
       }

       if (data.message == "Failed! Email is already in use!") {
        alert('bu email oydalanilgan');
        email.focus()
       }

       if (data.message == "User registered successfully!") {
        let url = window.location.href.split('/pages')[0];
        window.location.assign(`${url}/pages/login.html`)

       }
    })
    .catch(err => {
        console.log(err);
    })
    .finally(function () {
        btn.innerHTML = 'Register' ;
        btn.removeAttribute("disabled");
    })

    
})

btn2 && btn2.addEventListener('click', function (ev) {
    ev.preventDefault()
    let url = window.location.href.split('/pages')[0];
    window.location.assign(`${url}/pages/login.html`)

})