//Adding functionality to the NewsLetter form.
/*
1. Grab the form element.
2. Add event listerner and the handler function
3. Function saves the data in the local storage.
*/
const form = document.querySelector("#form");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const newsLetters = [];
    const subscriber = {
        email : document.querySelector("#form").value
    }
    newsLetters.push(subscriber);
    window.localStorage.setItem("newLetters", JSON.stringify(newsLetters));
    form.reset();
 } );


