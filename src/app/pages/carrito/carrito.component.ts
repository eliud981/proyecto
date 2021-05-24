import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Pedido } from 'src/app/models';
import { CarritoService } from 'src/app/services/carrito.service';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  pedido: Pedido;
  total: number;
  cantidad: number;

  constructor(public menucontroler: MenuController,
    public firestoreService: FirestoreService,
    public carritoService: CarritoService,
    public firebaseauthService:FirebaseauthService) {
       
      this.initCarrito();
      this.loadPedido();
}

ngOnInit() {}

openMenu(){
console.log('open menu');
this.menucontroler.toggle('principal')
}

loadPedido(){
 this.carritoService.getCarrito().subscribe( res => {
   this.pedido= res;
   this.getTotal;
   this.getCantidad;
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

getTotal(){
  this.total=0;
  this.pedido.productos.forEach( producto => {
    this.total = (producto.producto.precioReducido) * producto.cantidad + this.total;
  });
}
getCantidad(){
  this.cantidad=0;
  this.pedido.productos.forEach( producto => {
    this.cantidad = producto.cantidad + this.cantidad;
  });

}

async pedir(){
  if (this.pedido.productos.length){
    console.log('Añade items');
    return;
  }
this.pedido.fecha = new Date();
this.pedido.precioTotal = this.total;
this.pedido.uid =this.firestoreService.getId();
const uid = await this.firebaseauthService.getUid();
console.log('pedir()->', this.pedido, uid);
const path = 'Cliente/' +uid+ 'pedidos/'
this.firestoreService.createDoc(this.pedido, path, this.pedido.uid).then( ()=>{
  console.log('Guardado con exito');
  this.carritoService.clearCarrito();
});

}

}
