import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { from } from 'rxjs';
import { Productos } from 'src/app/models';
import { FirestorageService } from 'src/app/services/firestorage.service';

@Component({
  selector: 'app-set-productos',
  templateUrl: './set-productos.component.html',
  styleUrls: ['./set-productos.component.scss'],
})
export class SetProductosComponent implements OnInit {

  productos: Productos[]=[];


  newProducto: Productos;

  enableNewProducto=false;

  private path = 'Productos/';

  newImage="";
  newFile="";

  loading: any;

  constructor(public menucontroler: MenuController,
              public firestoreService: FirestoreService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public alertController: AlertController,
              public firestorageService: FirestorageService) { }

  ngOnInit() {
    this.getProductos();
  }
//abrir menú lateral
  openMenu(){
    console.log('open menu');
    this.menucontroler.toggle('principal')
  }

  //funcion que manda la informacion registrada de un producto a la base de datos 
  //y mientras se realiza el poceso manda a llamar la funcion para mostrar una ventana emergente 
  async guardarProducto(){
    this.presentLoading();

    const path ='Productos';
    const name = this.newProducto.nombre;
    const res= await this.firestorageService.uploadImage(this.newFile, path, name);
    this.newProducto.foto=res;
    this.firestoreService.createDoc(this.newProducto, this.path, this.newProducto.id).then(res=>{
      this.loading.dismiss();
      this.presentToast('Guardado con exito');
    }).catch(error=>{
      this.presentToast('No se pudo guardar');
    });
  }

  //funcion que lee todos los productos refgistrados en la base de datos
  getProductos(){
    this.firestoreService.getCollection<Productos>(this.path).subscribe( res=>{

      this.productos=res;

    });
  }
//Funcion que muestra una ventana emergente preguntando si esta seguro de eliminar el producto seleccionado
  async deleteProducto(producto: Productos){
      const alert = await this.alertController.create({
        cssClass: 'nomral',
        header: 'ADVERTENCIA',
        message: 'Seguro desea <strong>eliminar</strong> este producto',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'normal',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
              //this.alertController.dismiss();
            }
          }, {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Okay');
              this.firestoreService.deleteDoc(this.path,producto.id).then(res=>{
               
                this.presentToast('Eliminado con exito');
                this.alertController.dismiss();
              }).catch(error=>{
                this.presentToast('No se pudo eliminar');
              });
            }
          }
        ]
      });
      await alert.present();
  }
//Funcion para agregar un producto nuevo a la base de datos
  nuevo(){
    this.enableNewProducto=true;
    this.newProducto = {
      nombre: '',
      precioNormal: null,
      precioReducido: null,
      foto:'',
      id: this.firestoreService.getId(),
      fecha: new Date()
    };
  }
//Funcion que muestra una ventana emergente con la leyenda de ""guardando"
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'normal',
      message: 'Guardando...',
    });
    await this.loading.present();
    //await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      cssClass: 'normal',
      duration: 2000,
      color: 'light',
    });
    toast.present();
  }
//Funcion para poder mostrar y guardar una imagen de referencia a cada producto
  async newImageupload(event:any){
    if(event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload=((image)=>{
      this.newProducto.foto=image.target.result as string;

      });
      reader.readAsDataURL(event.target.files[0]);
    }


    //console.log('recibi res de la promesa', res);
    //console.log('fin de la funcion -> newImageupload');
    
  }


}
