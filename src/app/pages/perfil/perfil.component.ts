import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
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

  
  constructor(public menucontroler: MenuController,
              public firebaseauthService: FirebaseauthService,
              public firestorageService:FirestorageService,
              public firestoreService:FirestoreService ) { 

        
  async ngOnInit() {

    const uid = await this.firebaseauthService.getUid();
    console.log(uid);

  }

  
  openMenu(){
    console.log('open menu');
    this.menucontroler.toggle('principal')
  }


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

async registrarse(){
  const credenciales = {
    email: this.cliente.email,
    password: this.cliente.celular,
  }
  const res = await this.firebaseauthService.registrar(credenciales.email, credenciales.password).catch(err => {
    console.log('error=>', err);
  });
  const uid = await this.firebaseauthService.getUid();
  this.cliente.uid=uid;
  this.guardarUser();

}

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
}

getUserInfo(uid: string){
  const path = 'Clientes';
  this.firestoreService.getDoc<Cliente>(path, uid).subscribe(res=> {

      this.cliente = res;
  });
}

ingresar(){
  const credenciales ={
    email: this.cliente.email,
    password: this.cliente.celular,
  };
  this.firebaseauthService.login(credenciales.email,credenciales.password).then(res => {

    console.log('Ingreso con exito');

  });
}

}
