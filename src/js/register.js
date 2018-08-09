//********ESTE DOCUMENTO MANIPULA AL register.html********//

//VARIABLES

const btnFacebook = document.getElementById('btnFacebook');
const btnGoogle = document.getElementById('btnGoogle');
const form = document.getElementById('form');

form.addEventListener('submit', event => {
  //Prevenimops que se refresque la pagina al darle click al boton
  event.preventDefault();

  /*
  Obtenemos los valores de los input lo ponemos dentro de la variable
  para obtenerlo cada vez que se da click en el boton
   */

  let email = document.getElementById('email').value;
  let name = document.getElementById('fullname').value;
  let password = document.getElementById('password').value;
  let passwordConfirm = document.getElementById('passwordConfirm').value;

  //Confirmamos que los input de contraseña sean iguales
  if (password != passwordConfirm) {
    alert('Las contraseñas no coinciden');

    /* como no coinciden hacemos un return esto significa,
    que no seguimos ejecutando esta funcion */
    return;
  }

  /* Creamos una funcion que servira como callback dato curioso:
  al ser esto un callback se ejecutara despues de la funcion register */
  const callback = result => {
    /* result nos devuelve toda la data que esta en register como por ejemplo
    el id que usamos para escribir en la database */
    let user = result.user;
    writeUserData(user.uid, name, email, user.photoURL);
  };

  /* Ejecutamos la funciona register con esto agregamos al Authentication el correo
  y la password, el parametro callback nos regresa un ID que usamos en la funcion
  WriteUserdata dentro del callback */
  register(email, name, password, callback);
});

btnFacebook.addEventListener('click', () => {
  const callback = result => {
    let user = result.user;
    writeUserData(user.uid, user.displayName, user.email, user.photoURL);
  };
  signFacebook(callback);
});

btnGoogle.addEventListener('click', () => {
  signGoogle();
});
