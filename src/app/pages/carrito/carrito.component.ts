import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Pedido } from 'src/app/models';
import { CarritoService } from 'src/app/services/carrito.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  pedido: Pedido;

  constructor(public menucontroler: MenuController,
    public firestoreService: FirestoreService,
    public carritoService: CarritoService) {
       
      this.initCarrito();
      this.loadPedido();
}

ngOnInit() {}

openMenu(){
console.log('open menu');
this.menucontroler.toggle('principal')
}

loadPedido(){
  this.carritoService.getCarrito().then( res => {
    console.log(res);
    if(res){
       this.pedido = res;
    }
   
  });
}

initCarrito(){
  this.pedido = {
    uid: '',
    cliente: null,
    productos: [],
    precioTotal: null,
    estado: 'enviado',
    fecha: new Date(),
    valoracion: null,
  };
}


}
