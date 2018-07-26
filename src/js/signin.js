//********ESTE DOCUMENTO MANIPULA AL index.html********//

//VARIABLES
const email = document.getElementById('email')
const password = document.getElementById('password')
const btnSignin = document.getElementById('btnSignin')
const btnFacebook = document.getElementById('btnFacebook')
const btnGoogle = document.getElementById('btnGoogle')


btnSignin.addEventListener('click',()=>{
    email2 =email.value
    password2 = password.value
    signIn(email2,password2)
})

btnFacebook.addEventListener('click',()=>{
    signFacebook()
})

btnGoogle.addEventListener('click',()=>{
    signGoogle()
})



/* const btnSignin = document.getElementById("btnSignin");
btnSignin.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(function () {
            console.log('Inició Sesión');
        })
        .catch(function (error) {
            console.log('Contraseña incorrecta');
        });
}) */