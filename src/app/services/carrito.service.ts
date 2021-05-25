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
//Esta funcion trae de la base de datos todos los productos que el usuario ingresó al carrito
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
//Inicializar datos del carrito
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
//Funcion para cargar la informacion de la base de datos asociada a el usuario ingresado
  loadCliente(){
    console.log('getUserInfo')
      const path = 'Clientes';
      this.firestoreService.getDoc<Cliente>(path, this.uid).subscribe(res=> {
    
          this.cliente = res;
          this.loadCarrito();
      });
  }

//Se registran todos los cambios en el pedido
  getCarrito(): Observable<Pedido> {
    
    return this.pedido$.asObservable();
  }

  //Funcion que agrega productos selecionados al carrito de compras
  addProducto(producto: Productos) {
    //Si el usuario ya ha iniciado sesion 
    //En caso de no tener sesion iniciada te redirige a el apartado de perfil para hacer login
    if(this.uid.length){
        const item = this.pedido.productos.find( productoPedido => {
          //Si existe un producto en el carrito con la misma id que el que se esta solicitando actualmente entinces se guarda el id en item
          return (productoPedido.producto.id === producto.id)
        });
        //Si ya esta en el carrito un mismop producto solo sumamos uno a la cantidad
        if(item !== undefined){
            item.cantidad ++;
        }else{
          //Sino se habia guardado ese mismo producto en el carrito agregamos el producto y guardamos la cantidad como 1
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

    this.pedido$.next(this.pedido);
    console.log('en add pedido -> ', this.pedido);

    const path = 'Clientes/' + this.uid + '/' + this.path;
    //se agregan los cambios a la base de datos
    this.firestoreService.createDoc(this.pedido, path, this.uid).then( () => {
        console.log('agregado con exito ');
    } );

  }
 
  //Al igual que la funcion agregar, la funcion removerProducto baja en uno la cantidad del producto o en caso de ser el ultimo de ese tipo en el carrito
  //lo remueve completamente de la misma. Estos cambios ademas se guardan en la base de datos
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

  //Funcion que limpia el carrito de compras una vez ya se presionó  el boton de pedir la compra
  //Se guardan cambios en la base de datos
  clearCarrito(){
    const path  = 'Clientes/' + this.uid + '/' + 'carrito';
    this.firestoreService.deleteDoc(path,this.uid).then ( ()=>{
        this.initCarrito();
    });
  }

}