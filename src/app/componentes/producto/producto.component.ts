import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/models';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() producto: Productos;
  

  constructor(public carritoService: CarritoService) { }

  ngOnInit() {
    //console.log('el producto es -> ', this.producto);

  }
//Al precionar el boton de agregar producto que se encuentra en cada item de la tienda se manda a llamar la funcion de addProducto
  addCarrito(){
        this.carritoService.addProducto(this.producto);
  }

}
