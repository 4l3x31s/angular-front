import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { ListaClaseComponent } from './pages/lista-clase/lista-clase.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'estudiante', component: ListaEstudianteComponent},
  {path: 'clase', component: ListaClaseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
