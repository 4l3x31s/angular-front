import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { ListaClaseComponent } from './pages/lista-clase/lista-clase.component';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModule } from './material-import';
import { HttpClientModule } from '@angular/common/http';
import { PrintErrorComponent } from './utils/print-error/print-error.component';
import { AsignarClaseComponent } from './pages/asignar-clase/asignar-clase.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClaseComponent,
    EstudianteComponent,
    ListaClaseComponent,
    ListaEstudianteComponent,
    PrintErrorComponent,
    AsignarClaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    HttpClientModule,
  ],
  exports:[
    MaterialImportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
