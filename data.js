
var provider = new firebase.auth.GoogleAuthProvider();
$('#google').click(function () {
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<img src = '" + result.user.photoURL + "'/>").show();
           
        });
})
const log = new firebase.auth.FacebookAuthProvider();
$('#facebook').click(function(){
    log.addScope('public_profile');
    firebase.auth().signInWithPopup(log)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<img src = '" + result.user.photoURL + "'/>").show();

        });
})

$('#ingresa').click(function(){
    const emailIngreso = document.getElementById("email").value;
    const contrasenaIngreso = document.getElementById("contrasena").value;
    firebase.auth().signInWithEmailAndPassword(emailIngreso, contrasenaIngreso)
        .then(function (result) {
            console.log(result.user);
            $('#root').hide();
            $('#data').append("<img src = '" + result.user.photoURL + "'/>").show();
});
})
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
firebase.initializeApp({
    apiKey: "AIzaSyCK3gtzmgVwu0Z3RgTKLnCDGyqPZp56UI4",
    authDomain: "freew-b52fa.firebaseapp.com",
    projectId: "freew-b52fa"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function guardar() {

    let post = document.getElementById('post').value;
    db.collection("users").add({
        first: post
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("post").value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}   
// leer datos
let content = document.getElementById('content');
db.collection("users").onSnapshot((querySnapshot) => {
    content.innerHTML = '';
    querySnapshot.forEach((doc) => {
        content.innerHTML +=`
        <tr>
                <th id = "celda">${doc.id}</th>
                <td>${doc.data().first}</td>
                <button class = "btn btn-danger" onclick = "eliminar('${doc.id}')">Elimina</button> 
                <br>
                 <button class="btn btn-warning" onclick = "editar('${doc.id}','${doc.data().first}')">Editar</button>
            </tr>`
                

    });
});

//borrar datos

function eliminar(id){
    db.collection("users").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}


//editar
function editar(id,post){
    document.getElementById('post').value = post;

    let boton = document.getElementById('botonpostea');
    boton.innerHTML = 'Editar';

    boton.onclick = function () {
        var washingtonRef = db.collection("users").doc(id);

        let post = document.getElementById('post').value;

        return washingtonRef.update({
            first: post
        })
            .then(function () {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Comparte';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });



    }
}