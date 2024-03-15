const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`; //"Hello "+username // `기호!! 주의
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit", onLoginSubmit);