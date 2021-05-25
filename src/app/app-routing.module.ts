import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SetProductosComponent } from './backend/set-productos/set-productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { MispedidosComponent } from './pages/mispedidos/mispedidos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

//Se asignan los nombres de las rutas que llevarán a cada componente

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'set-productos',component: SetProductosComponent},
  {path: 'mispedidos',component: MispedidosComponent},
  {path:'carrito', component: CarritoComponent},
  {path: 'perfil',component: PerfilComponent},
  {path: '',component: HomeComponent},
  {path: '**',redirectTo: 'home',pathMatch: 'full'},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
