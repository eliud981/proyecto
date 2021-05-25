import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database:AngularFirestore) { }

  //funcion para crear un documento en la base de datos o en caso de existir ya uno restablecer todos sus valores a los indicados
createDoc(data: any, path: string, id: string){
  const collection = this.database.collection(path);
  return collection.doc(id).set(data);
}
//funcion para obtener los documentos de la base de datos
getDoc<tipo>(path: string, id: string){
  const collection = this.database.collection<tipo>(path);
  return collection.doc(id).valueChanges();
}
//eliminar un documento de la base de datos
deleteDoc(path: string, id: string){
  const collection = this.database.collection(path);
  return collection.doc(id).delete();
}
//actualizar un documento de la base de datos sin borrar los demas cambios
updateDoc(data: any, path: string, id: string){
  const collection = this.database.collection(path);
  return collection.doc(id).update(data);
}
//funcion para crear un id 
getId(){
  return this.database.createId();
}
//funcion para obtener la informacion de toda una colecion de la base de datos
getCollection<tipo>(path: string){
  const collection = this.database.collection<tipo>(path);
  return collection.valueChanges();

}
//Funcion que trae una coleccion en base a una busqueda de algun parametro
//La utilizamos para filtrar los pedidos dependiendo de su estado
getCollectionQuery<tipo>(path: string, parametro: string, condicion: any, busqueda: string){
  const collection = this.database.collection<tipo>(path, ref =>ref .where(parametro , condicion, busqueda));
  return collection.valueChanges();

}




}
