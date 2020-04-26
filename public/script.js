let email = document.getElementById("email");

email.addEventListener("blur",errorCheck,false);

function errorCheck(){
    if ((email.textContent = "") || (email.textContent = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
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