let arr = JSON.parse(localStorage.getItem("userData"));

  document.querySelector("form").addEventListener("submit",getlogin)



  function getlogin() {



    let email1 = document.querySelector("#emaillog").value
    let pass1 = document.querySelector("#passlog").value

    if (email1.length == 0 || pass1.length == 0) {
      alert("Please fill data")
    }
    
    else {
      let flag = false;
      arr.map((el) => {

        // console.log(el)

       if (el.personEmail == email1 && el.personPass == pass1) {
        window.location.href="index.html";
          
          flag = true;
        }
      })
      if (flag) {
        alert("Login succesful")
      }
      else {
        alert("Incorrect Data")
      }
    }

  }