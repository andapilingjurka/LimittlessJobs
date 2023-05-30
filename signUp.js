const name = document.getElementById("name");
const sname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");

function isEmpty(str) {
     return !str.trim().length;
}

function validateForm(){
    if( isEmpty(name.value) ||isEmpty(sname.value) ||
        isEmpty(email.value) ||isEmpty(password.value)){
        alert("All fields should have values!")
    }
    else if((password.value).length < 8 ){
        alert("Password should be longer than 8 characters!")
    }
    else if(!(email.value).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        alert("Email is not valid!")
    }
    else{
            alert("Your data has been successfully registered!");
    }
}