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
  total: number;
  cantidad: number;

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

}
