document.querySelector("form").addEventListener("submit", signupfun)


let arr = JSON.parse(localStorage.getItem("userData")) || [];

function signupfun(event) {
    event.preventDefault()

    let signupobj = {

        personName: document.querySelector("#name").value,
        personEmail: document.querySelector("#email").value,
        personPass: document.querySelector("#pass").value,

    }

    if (signupobj.personName.length == 0) {
        alert("Please fill name")
    }
    else if (signupobj.personEmail.length == 0) {
        alert("Please fill Email")
    }
    else if (signupobj.personPass.length == 0) {
        alert("Please fill  Password")
    }
    else {
        alert("Sign up succesful ")
    }

    arr.push(signupobj)

    localStorage.setItem("userData", JSON.stringify(arr))
    // console.log(signupobj);   

}