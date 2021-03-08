import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EstudianteDto } from '../../dto/estudiante.dto';
import { ClaseDto } from '../../dto/clase.dto';
import { AsignacionDto } from '../../dto/asignacion.dto';


@Component({
  selector: 'app-asignar-clase',
  templateUrl: './asignar-clase.component.html',
  styleUrls: ['./asignar-clase.component.scss']
})
export class AsignarClaseComponent implements OnInit {
  public myForm: FormGroup = <FormGroup>{};
  public estudianteDto: EstudianteDto = <EstudianteDto>{}
  public lstClase: ClaseDto[] = [];
  public asignacionDto: AsignacionDto = <AsignacionDto>{}

  idClase: number = 0;
  constructor(
    public fb: FormBuilder,
    public api: ApiService,
    public dialogRef: MatDialogRef<AsignarClaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EstudianteDto
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.estudianteDto = this.data;
    }
    this.asignarclase();
    this.iniciarValidaciones();
  }
  async asignarclase() {
    let respuesta:any = await this.api.getGlobal('/clase/listar').toPromise();
    this.lstClase = Object.assign(respuesta);
  }

  iniciarValidaciones() {
    this.myForm = this.fb.group({
      vIdClase: ['', [
        Validators.required,
      ]],
    });
  }
  get f(): any { return this.myForm.controls; }
  async registrarClase() {
    try{
      this.asignacionDto.idClase = this.idClase;
      this.asignacionDto.idEstudiante = this.estudianteDto.idEstudiante;
      let respuesta: AsignacionDto = await this.api.postGlobal<AsignacionDto>('/estudiante-clase',this.asignacionDto).toPromise();
      if(respuesta){
        this.dialogRef.close();
      }else{
        window.alert('Error al registrar los datos.')
      }
    }catch(err) {
      window.alert('Error al registrar los datos.')
    }
  }

}
