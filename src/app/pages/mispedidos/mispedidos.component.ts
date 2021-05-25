import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Pedido } from 'src/app/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mispedidos',
  templateUrl: './mispedidos.component.html',
  styleUrls: ['./mispedidos.component.scss'],
})
export class MispedidosComponent implements OnInit, OnDestroy {

  nuevosSuscriber: Subscription;
  entregadosSuscriber: Subscription;
  pedidos: Pedido[]=[];

  constructor(public menucontroler: MenuController,
              public firestoreService:FirestoreService,
              public firebaseauthService:FirebaseauthService,) { }

  ngOnInit() {
    this.getPedidosNuevos();
  }

  ngOnDestroy(){
    if(this.nuevosSuscriber){
      this.nuevosSuscriber.unsubscribe();
    }
    if(this.entregadosSuscriber){
      this.entregadosSuscriber.unsubscribe();
    }
  }
//abrir menú lateral
  openMenu(){
    console.log('open menu');
    this.menucontroler.toggle('principal')
    }

//Esta funcion se encarga de redirigirte a los distintos pedidos mediante la deteccion de un evento
//el cual sucede al seleccionar una de las opciones en el apartado de pedidos
    changeSegment(ev: any){
      //console.log('changeSegment(), ev.detail.value');
      const opc = ev.detail.value;
      if(opc ==='Entregados'){
        this.getPedidosEntregdos
      }
      if(opc === 'Nuevos'){
        this.getPedidosNuevos
      }
    }
//Esta funcion se encarga de traer todos los pedidos con el estado "enviado" de la base de datos
    async getPedidosNuevos(){
      console.log('getPedidosNuevos()');
      const uid = await this.firebaseauthService.getUid();
      const path = 'Cliente/' +uid+ 'pedidos/'
      this.nuevosSuscriber = this.firestoreService.getCollectionQuery<Pedido>(path,'estado','==','enviado').subscribe(res =>{
        if(res.length){
          console.log('getPedidosNuevos() -> res', res);
          this.pedidos=res;
        }
      });
    }
    
//Al igual que la anterior, esta funcion manda a llamar los datos de los pedidos con el estado entregado
  async getPedidosEntregdos(){
      console.log('getPedidosEntregados()');
      const uid = await this.firebaseauthService.getUid();
      const path = 'Cliente/' +uid+ 'pedidos/'
      this.entregadosSuscriber = this.firestoreService.getCollectionQuery<Pedido>(path,'estado','==','entregado').subscribe(res =>{
        if(res.length){
          console.log('getPedidosEntregados() -> res', res);
          this.pedidos=res;
        }
      });
    }
}
