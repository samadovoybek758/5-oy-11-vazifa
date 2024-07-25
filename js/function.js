const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }


function validate (username,email,password,rePassword) {
    if (username.value.length < 3) {
        alert ("usernameda xatolik")
        username.focus()
        username.style.outlineColor ="red"
        return false
    }
    if (email.value.length < 3) {
        alert ("emailda xatolik")
        email.focus()
        email.style.outlineColor ="red"
        return false
    }
    if (password.value.length < 3) {
        alert ("parolda xatolik")
        password.focus()
        password.style.outlineColor ="red"
        return false
    }

    if (password.value != rePassword.value) {
        alert("parolda hatolik")
        password.value =''
        rePassword.focus()
        rePassword.style.outlineColor ="red"
        return false
    }
    if (!validateEmail(email.value)) {
        alert("emailda xotolik bor")
        email.focus()
        return false
    }

    return true
}




function loginValidate (username,password) {
    if (username.value.length < 3) {
        alert ("usernameda xatolik")
        username.focus()
        username.style.outlineColor ="red"
        return false
    }
    if (password.value.length < 3) {
        alert ("parolda xatolik")
        password.focus()
        password.style.outlineColor ="red"
        return false
    }

    return true
}

export{validate ,loginValidate}