//********ESTE DOCUMENTO MANIPULA AL index.html********//

//VARIABLES
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');
const btnSignin = document.getElementById('btnSignin');
const btnFacebook = document.getElementById('btnFacebook');
const btnGoogle = document.getElementById('btnGoogle');

/* Agregamos un event listerner al formulario para que se envie la solicitud
a la base de datos despues de ser validado */
form.addEventListener('submit', event => {
  event.preventDefault();
  signIn(email.value, password.value);
});

btnFacebook.addEventListener('click', () => {
  const callback = result => {
    let user = result.user;
    writeUserData(user.uid, user.displayName, user.email, user.photoURL);
  };
  signFacebook(callback);
});

btnGoogle.addEventListener('click', () => {
  const callback = result => {
    let user = result.user;
    writeUserData(user.uid, user.displayName, user.email, user.photoURL);
  };
  signGoogle(callback);
});
