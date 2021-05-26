import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { BackendModule } from './backend/backend.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< Updated upstream
  imports: [BrowserModule, IonicModule.forRoot(),PagesModule,BackendModule, AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule,AngularFireStorageModule,AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
=======
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
     PagesModule,
     BackendModule,
      AppRoutingModule,
       AngularFireModule.initializeApp(environment.firebaseConfig),
       AngularFirestoreModule,
       AngularFireStorageModule,
       HttpClientModule,
       AngularFireAuthModule,
  ],
  providers: [ SQLite, SQLitePorter,{ provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy }],
>>>>>>> Stashed changes
  bootstrap: [AppComponent],
})
export class AppModule {}
