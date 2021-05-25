import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  //  Autenticacion con firebase


  //Nada mas al abrir la aplicacion se manda a llamar la funcion para conseguir el id del usuario
  //Esto para en caso de haberse registrado ya no perderá sus datos incluso al refrescar la pag
  constructor(public auth: AngularFireAuth) { 

    this.getUid();
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  registrar(email: string, password: string){
   return this.auth.createUserWithEmailAndPassword(email, password);
  }

  //En caso de existir, esta funcion regresa el id creada con firebase del usuario actual.
  //Esta va a utilizarse como identificador para el resto de datos del usuario, tales como productos en el carrito, pedidos, entre otros
  async getUid(){

    const user = await this.auth.currentUser;
    if(user === null){
      return null;
    }else{
      return user.uid;
    }
  }
  //observable que registra todos lo que pasa con el estado de autenticacion del usuario
  stateAuth(){
   return this.auth.authState;
  }

}
