import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';


class App extends Component {
  loginGoogle() {
    const log = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(log)
      .then(result => console.log(`${result.user.email}  E-mail registrado`))
      .catch(error => console.log(`Error ${error.code}:${error.message}`))
  }
  loginEmail() {
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
      .then(result => console.log(`${result.user.email}  te logeaste`))
      .catch(error => console.log(`Error ${error.code}:${error.message}`))
  }
  loginEmailIngreso() {
    const emailIngreso = document.getElementById("emailIngreso").value;
    const contrasenaIngreso = document.getElementById("contrasenaIngreso").value;
    firebase.auth().signInWithEmailAndPassword(emailIngreso, contrasenaIngreso)
      .then(result => console.log(`${result.user.email }  Iniciaste Sesion`))
      .catch(error => console.log(`Error ${error.code}:${error.message}`))
  }
cerrar(){
  firebase.auth().signOut()
  .then(result=> console.log('saliendo...'))
  .catch(error=> console.log('error'))
}
verificar(){
  
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> ¡FreeW! </h1>
        </header>
        <p className="App-intro">
          <button id="google" className="btn btn-dark my-2 my-sm-0" onClick={this.loginGoogle}>Login con Google</button>
        </p>
        <div>
        <h4> Registro de Usuarios </h4>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
          <input id="email" type="email" placeholder="ingresa tu email" className="form-control mr-sm-2"></input>
          <input id="contrasena" type="password" placeholder="ingresa tu password" className="form-control mr-sm-2"></input>
          <button className="btn btn-dark my-2 my-sm-0" onClick={this.loginEmail}>Registrarse</button>
          </nav>
          </div>
          <div>
          <h4> Ingreso de Usuarios </h4>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>
            <input id="emailIngreso" placeholder="ingresa tu email" className="form-control mr-sm-2"></input>
            <input id="contrasenaIngreso" placeholder="ingresa tu password" className="form-control mr-sm-2"></input>
            <button className="btn btn-dark my-2 my-sm-0" onClick={this.loginEmailIngreso}>Ingresa</button>
          </nav>
          </div>
          <div>
          <button className="btn btn-dark my-2 my-sm-0" onClick={this.cerrar}>Cerrer Sesion </button>
          </div>
      </div>
      
    );
  }
}
export default App;