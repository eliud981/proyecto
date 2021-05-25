import { Component, Input, OnInit } from '@angular/core';
import { ProductoPedido } from 'src/app/models';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.scss'],
})
export class ItemCarritoComponent implements OnInit {

  @Input() productoPedido: ProductoPedido;

  constructor(public carritoService: CarritoService) { }

  ngOnInit() {}

  //funciones para los botones de añadir o quitar una unidad desde el apartado de carrito
  
  addCarrito(){
    this.carritoService.addProducto(this.productoPedido.producto);
}

  removeCarrito(){
    this.carritoService.removeProducto(this.productoPedido.producto);
  }
}
