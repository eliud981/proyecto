import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Productos } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private path = 'Productos/'

  productos: Productos[] = [];
//apenas se abre mandamos a llamar la funcion 
  constructor(public menucontroler: MenuController,
              public firestoreService: FirestoreService) {
                    this.loadProductos();
   }

  ngOnInit() {}

  //funcion para abrir el menú lateral
  openMenu(){
    console.log('open menu');
    this.menucontroler.toggle('principal')
  }
//Se encarga de traer de firebase todos los productos guardados para mostrarlos en el apartado de tienda
  loadProductos() {
      this.firestoreService.getCollection<Productos>(this.path).subscribe(res => {
            //console.log(res);
            this.productos = res;
      });
  }

}
