//Configuración de firebase
   let config = {
    apiKey: "AIzaSyCK3gtzmgVwu0Z3RgTKLnCDGyqPZp56UI4",
    authDomain: "freew-b52fa.firebaseapp.com",
    databaseURL: "https://freew-b52fa.firebaseio.com",
    projectId: "freew-b52fa",
    storageBucket: "freew-b52fa.appspot.com",
    messagingSenderId: "1032864076994"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
$('#google').click(function () {
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<img src = '" + result.user.photoURL + "'/>").show().style.display='block';
        });
});
document.getElementById('facebook').addEventListener("click", loginFace);
function loginFace() {
    const log = new firebase.auth.FacebookAuthProvider();
    log.addScope('public_profile');
    firebase.auth().signInWithPopup(log)
        .then(result => console.log(`${result.user.email}  Iniciaste Sesion`))

        .catch(error => console.log(`Error ${error.code}:${error.message}`))
}
document.getElementById('ingresa').addEventListener("click", loginEmailIngreso);
function loginEmailIngreso() {
    const emailIngreso = document.getElementById("email").value;
    const contrasenaIngreso = document.getElementById("contrasena").value;
    firebase.auth().signInWithEmailAndPassword(emailIngreso, contrasenaIngreso)
        .then(result =>  console.log(`${result.user.email}  Iniciaste Sesion`))
        .catch(error => console.log(`Error ${error.code}:${error.message}`))
}
document.getElementById('registrar').addEventListener("click", loginEmail);
function loginEmail() {
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .then(result => {
            const user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function () {
                // enviando Email
                console.log('enviando correo---')
            }).catch(function (error) {
                console.log(error)
            });
        })
        .catch(error => console.log(`Error ${error.code}:${error.message}`))
}

document.getElementById('cerrar').addEventListener("click", cerrar);
function cerrar(){
    firebase.auth().signOut()
        .then(function result(){
            console.log('saliendo...')
            $('#data').hide();
            $('#root').show();

        });
        } 
