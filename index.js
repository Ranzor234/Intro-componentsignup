var button = document.querySelector(".form-btn");
var warningName = document.querySelector('.warning-firstname');
var warningLast = document.querySelector('.warning-lastname');
var warningEmail = document.querySelector('.warning-email');
var warningPass = document.querySelector('.warning-password');
var inputFirst = document.getElementById('firstname');
var inputLast = document.getElementById('lastname');
var inputEmail = document.getElementById('email');
var password = document.getElementById('password');
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click', (e) => {
    if (inputFirst.value === ''){
        warningName.style.display = 'block';
        inputFirst.style.border = '2px solid hsl(0, 100%, 74%)';
    } else{
        warningName.style.display = 'none';
        inputFirst.style.border = '2px solid rgb(235, 235, 235)';
    }
    if (inputLast.value === ''){
        warningLast.style.display = 'block';
        inputLast.style.border = '2px solid hsl(0, 100%, 74%)';
    }
    else{
        warningLast.style.display = 'none';
        inputLast.style.border = '2px solid rgb(235, 235, 235)';
    }
    if (inputEmail.value === '' || inputEmail.value == mailformat ){
        warningEmail.style.display = 'block';
        inputEmail.style.border = '2px solid hsl(0, 100%, 74%)';
    }else{
        warningEmail.style.display = 'none';
        inputEmail.style.border = '2px solid rgb(235, 235, 235)';
    }
    if (password.value === ''){
        warningPass.style.display = 'block';
        password.style.border = '2px solid hsl(0, 100%, 74%)';
    }else{
        warningPass.style.display = 'none';
        password.style.border = '2px solid rgb(235, 235, 235)';
    }
    
    e.preventDefault();
})


