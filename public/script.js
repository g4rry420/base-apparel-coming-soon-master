let email = document.getElementById("email");

email.addEventListener("keyup",errorCheck,false);


pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/


function errorCheck(){
    if (email.textContent = ""){
        document.getElementById("error").style.display = "initial";
        document.getElementById("span").style.display = "block";
    } else if (pattern.test(email.value)){
        document.getElementById("error").style.display = "none";
        document.getElementById("span").style.display = "none";
    }else{
        document.getElementById("error").style.display = "initial";
        document.getElementById("span").style.display = "block";
    }
}

// errorCheck(event){
// const validate = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

//     if (!validate.test(event.target.value)) {
//       return event.target.parentElement.classList.add("error");
//     }

//     return event.target.parentElement.classList.remove("error");
//   };