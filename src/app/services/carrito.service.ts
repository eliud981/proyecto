import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
//import { start } from 'repl';
import { Cliente, Pedido, Productos, ProductoPedido } from '../models';
import { FirebaseauthService } from './firebaseauth.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

private pedido: Pedido;
pedido$ = new Subject<Pedido>();
path: 'carrito/';
uid= '';
cliente: Cliente;

  constructor(public firebaseauthService: FirebaseauthService, 
              public firestoreService: FirestoreService, 
              public router: Router) {
    this.firebaseauthService.stateAuth().subscribe(res => {

        console.log(res);
      if(res !== null){
        this.uid = res.uid;
        this.loadCliente();
      }
    });
   }

  loadCarrito() {
    const path = 'Clientes/' + this.uid + '/' + 'carrito';
      this.firestoreService.getDoc<Pedido>(path, this.uid).subscribe(res => {
        console.log(res);
          if(res){
            this.pedido = res;
            this.pedido$.next(this.pedido);
          }else{
            this.initCarrito();
          }
      });
}
  initCarrito(){
    this.pedido = {
      uid: this.uid,
      cliente: this.cliente,
      productos: [],
      precioTotal: null,
      estado: 'enviado',
      fecha: new Date(),
      valoracion: null,
    };
    this.pedido$.next(this.pedido);
  }

  loadCliente(){
    console.log('getUserInfo')
      const path = 'Clientes';
      this.firestoreService.getDoc<Cliente>(path, this.uid).subscribe(res=> {
    
          this.cliente = res;
          this.loadCarrito();
      });
  }

  getCarrito(): Observable<Pedido> {
    
    return this.pedido$.asObservable();
  }

  addProducto(producto: Productos) {
    if(this.uid.length){
        const item = this.pedido.productos.find( productoPedido => {
          return (productoPedido.producto.id === producto.id)
        });
        if(item !== undefined){
            item.cantidad ++;
        }else{
          const add: ProductoPedido = {
            cantidad: 1,
            producto,
          };
          this.pedido.productos.push(add);
        }
    }else{
      this.router.navigate(['/perfil']);
      return;
    }
    console.log('en add pedido -> ', this.pedido);

    const path = 'Clientes/' + this.uid + '/' + this.path;

    this.firestoreService.createDoc(this.pedido, path, this.uid).then( () => {
        console.log('agregado con exito ');
    } );

  }
 
  removeProducto(producto: Productos){
    if(this.uid.length){

      let position = 0;
      const item = this.pedido.productos.find( (productoPedido, index) => {
        position= index;
        return (productoPedido.producto.id === producto.id)
      });
      if(item !== undefined){
          item.cantidad --;
          if(item.cantidad === 0){
            this.pedido.productos.splice(position, 1);
          }
        console.log('en remove pedido -> ', this.pedido);

        const path = 'Clientes/' + this.uid + '/' + this.path;
      
        this.firestoreService.createDoc(this.pedido, path, this.uid).then( () => {
            console.log('removido con exito ');
        } );
      }

    }
 
  }

  realizarPedido(){

  }

  clearCarrito(){

  }

}