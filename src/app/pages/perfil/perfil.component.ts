import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
   
  
  cliente: Cliente = {
    uid: '',
    email: '',
    nombre:'',
    celular: '',
    foto: '',
    referencia: '',
    ubicacion: null,
  };

  newFile: any;

  uid = '';
  suscriberUserInfo: Subscription;

  ingresarEnable = false; 
  
  //En caso de existir se obtiene la informacion ingresada anteriormente por el usuario, esto por un observador que nos proporciona la id; 
  //con esta id se manda a llamar una funcion que busca los datos en firebase.
  //En el caso que no exista ningun usuario logueado simplemente se manda a inicializar los datos

  constructor(public menucontroler: MenuController,
              public firebaseauthService: FirebaseauthService,
              public firestoreService:FirestoreService,
              public firestorageService:FirestorageService ) {

        this.firebaseauthService.stateAuth().subscribe(res => {

          if(res !== null){
            this.uid = res.uid;
            this.getUserInfo(this.uid);
          }else{
            this.initCliente();
          }
      });
}      

  async ngOnInit() {

    const uid = await this.firebaseauthService.getUid();
    console.log(uid);

  }

  //Se inicializan los datos de cliente
  initCliente() {
    this.uid = '';
            this.cliente = {
              uid: '',
              email: '',
              nombre:'',
              celular: '',
              foto: '',
              referencia: '',
              ubicacion: null,
            };
            console.log(this.cliente);
  }

  openMenu() {
    console.log('open menu');
    this.menucontroler.toggle('principal');
  }

//Funcion para agregar imagen al perfil
  async newImageupload(event:any){
    if(event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload=((image)=>{
      this.cliente.foto=image.target.result as string;

      });
      reader.readAsDataURL(event.target.files[0]);
    }
}
//En esta funcion se leen los datos de email y celular para crear una cuenta que con la autenticacion de firebase nos va generar una id
async registrarse() {
  const credenciales = {
    email: this.cliente.email,
    password: this.cliente.celular,
  };
  const res = await this.firebaseauthService.registrar(credenciales.email, credenciales.password).catch(err => {
    console.log('error=>', err);
  });
  const uid = await this.firebaseauthService.getUid();
  this.cliente.uid=uid;
  this.guardarUser;
  console.log(uid);

}

//funcion para guardar los datos ingresados por el usuario en el apartado de perfil al registrarse
//en caso de que se haya agregado una foto de perfil, esta se guarda primero, sino simplemente se mandan el resto de datos a firebase
async guardarUser(){
  const path ='Cliente';
  const name = this.cliente.nombre;
  if(this.newFile !== undefined){
    const res= await this.firestorageService.uploadImage(this.newFile, path, name);
    this.cliente.foto=res;
  }
  this.firestoreService.createDoc(this.cliente, path, this.cliente.uid).then(res=>{
    console.log('guardado con exito');
  }).catch(error=>{
  });
}

async salir(){
    //const uid = await this.firebaseauthService.getUid();
    //console.log(uid);
  this.firebaseauthService.logout();
  this.suscriberUserInfo.unsubscribe();
}

//Esta funcion obtiene los datos del usuario anteriormente registrados de la base de datos
getUserInfo(uid: string){
  console.log('getUserInfo')
  const path = 'Cliente';
  this.suscriberUserInfo = this.firestoreService.getDoc<Cliente>(path, uid).subscribe(res=> {

      this.cliente = res;
  });
}
//Inicio de sesion con la autenticacion de firebase
async ingresar(){
  const credenciales ={
    email: this.cliente.email,
    password: this.cliente.celular,
  };
  const res = await this.firebaseauthService.login(credenciales.email,credenciales.password).then(res => {

    console.log('Ingreso con exito');

  });
};

}
