import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
//import { start } from 'repl';
import { Cliente, Pedido, Productos, ProductoPedido } from '../models';
import { FirebaseauthService } from './firebaseauth.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

private pedido: Pedido;
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
  }

  loadCliente(){
    console.log('getUserInfo')
      const path = 'Clientes';
      this.firestoreService.getDoc<Cliente>(path, this.uid).subscribe(res=> {
    
          this.cliente = res;
          this.loadCarrito();
      });
  }

  getCarrito(): Promise<Pedido> {
    return new Promise(  resolve =>{

      if(!this.uid.length){
        resolve(null);
        return;
      }

      if(this.pedido){
        resolve(this.pedido);
        return;
      }else{
        const path = 'Clientes/' + this.uid + '/' + 'carrito';
        this.firestoreService.getDoc<Pedido>(path, this.uid).subscribe(res => {
     
            if(res){
              resolve(res);
              return;
            }else{
              resolve(null);
              return;
            }
        });
      }

    });
    
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

  }

  realizarPedido(){

  }

  clearCarrito(){

  }

}