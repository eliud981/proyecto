import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,Observable, Subject } from 'rxjs';
//import { start } from 'repl';
import { Cliente, Pedido, Productos, ProductoPedido } from '../models';
import { FirebaseauthService } from './firebaseauth.service';
import { FirestoreService } from './firestore.service';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

private pedido: Pedido;
pedido$ = new Subject<Pedido>();
path: 'carrito/';
uid= '';
cliente: Cliente;
private storage: SQLiteObject;
songsList = new BehaviorSubject([]);
private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public firebaseauthService: FirebaseauthService, 
              public firestoreService: FirestoreService, 
              public router: Router,
              private platform: Platform, 
              private sqlite: SQLite, 
              private httpClient: HttpClient,
              private sqlPorter: SQLitePorter,) {
    this.firebaseauthService.stateAuth().subscribe(res => {

        console.log(res);
      if(res !== null){
        this.uid = res.uid;
        this.loadCliente();
      }
    });
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'positronx_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
   }
<<<<<<< Updated upstream

=======
   dbState() {
    return this.isDbReady.asObservable();
  }
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql', 
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }



// Add
addSong(id, cliente_name, producto_name, precio_total, precio_final) {
  let data = [id, cliente_name, producto_name, precio_total, precio_final];
  return this.storage.executeSql('INSERT INTO users (id, cliente_name, producto_name, precio_total, precio_final) VALUES (?, ?,?,?,?)', data)
  .then(res => {
  
  });
}





// Delete
deleteSong(id) {
  return this.storage.executeSql('DELETE FROM users WHERE id = ?', [id])
  .then(_ => {
    
  });
}

//Esta funcion trae de la base de datos todos los productos que el usuario ingresó al carrito
>>>>>>> Stashed changes
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
      productos: null,
      precioTotal: null,
      predioReducido:null,
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