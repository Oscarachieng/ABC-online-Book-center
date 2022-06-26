//Adding functionality to the NewsLetter form.
/*
1. Grab the form element.
2. Add event listerner and the handler function
3. Function saves the data in the local storage.
*/
const form = document.querySelector("#news-letter");
form.addEventListener("submit",(event) => {
    event.preventDefault();
    
    const subscriber = {
        email : document.querySelector("#email").value
    }

    window.localStorage.setItem("subscriber", JSON.stringify(subscriber));
    alert("mail sent")
    form.reset();
 } );


/*
Lod-in Validation.
1. Grab the form input elements and asign to a variable.
2. Add event listener and event handler function.
3. Event handler function validates the email.
   3.1. if true -Grab the password value and compare to the existing passwords in the db.
   3.2.if the password match is found ////allow access for more actions.
4.Return warning message email, match not found, and advice the user to sign-u
*/ 

/*Log -in form elements.
*/
const log_in_form = document.querySelector("#log-in");
const username_email = document.querySelector("#username_email").value;
const password = document.querySelector("#password").value;
const sign_up_a = document.querySelector("#p_sign_up_a")

/*Adding event listener to the form */
log_in_form.addEventListener("submit", logIn)

const logIn = (username_email,password) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const  passw=  /^[A-Za-z]\w{7,14}$/;
    if (validRegex.text(username_email)) {
          if (password.match(passw)) {
            const user = {
                UserName : username_email,
                PassWord : password
            }  
            window.localStorage.setItem("user", JSON.stringify(user));
          }
    } else {
       alert("wrong username/password");
    }
}
