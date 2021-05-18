import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public storage: AngularFireStorage) { }


  uploadImage(file: any, path: string, nombre: string): Promise<string>{
    return new Promise(  resolve =>{

    const filePath = path + '/' + nombre;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
     // get notified when the download URL is available
     task.snapshotChanges().pipe(
      finalize(() => {
      ref.getDownloadURL().subscribe(  res => {
        const getDownloadURL = res;
        resolve(getDownloadURL);
        return;
      });

      })
   )
  .subscribe();
    });
  }

}
