import { loginValidate } from "./function.js";

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');



btn && btn.addEventListener('click', function (el) {
    el.preventDefault()

    let isValid = loginValidate(username,password)

    if (!isValid) {
        return
    }

    const user = {
        username : username.value,
        password : password.value
    };

    btn.innerHTML = 'pending...';
    btn.setAttribute('disabled',true)

    fetch("https://auth-rg69.onrender.com/api/auth/signin",{
        method : "POST",
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(user)
    })
    .then(res => res.json())


    .then(data => {
        if (data.id) {
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem('token', data.accessToken);

            let url = window.location.href.split('/pages')[0];
            window.location.assign(`${url}/index.html`)
        }

        if (data.message == "User Not found.") {
            alert(data.message);
            username.focus()
        }

        if (data.message == "Invalid Password!") {
            alert(data.message);
            password.focus()
        }
    })

    .catch(err =>{
        console.log(err);
    })
    .finally(function () {
        btn.innerHTML = 'Login' ;
        btn.removeAttribute("disabled");
    })
})

btn2 && btn2.addEventListener('click', function (ev) {
    ev.preventDefault()
    let url = window.location.href.split('/pages')[0];
    window.location.assign(`${url}/pages/register.html`)

})