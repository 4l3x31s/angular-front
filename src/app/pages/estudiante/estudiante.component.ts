import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EstudianteDto } from '../../dto/estudiante.dto';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  public myForm: FormGroup = <FormGroup>{};
  public estudianteDto: EstudianteDto = <EstudianteDto>{}

  idClase: number = 0;
  constructor(
    public fb: FormBuilder,
    public api: ApiService,
    public dialogRef: MatDialogRef<EstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EstudianteDto
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.estudianteDto = this.data;
    }
    this.iniciarValidaciones();
  }

  iniciarValidaciones() {
    this.myForm = this.fb.group({
      vIdentificacionEstudiante: ['', [
        Validators.maxLength(50),
        Validators.required,
      ]],
      vNombre: ['', [
        Validators.maxLength(200),
        Validators.required,
      ]],
      vApellido: ['', [
        Validators.maxLength(200),
        Validators.required,
      ]],

    });
  }
  get f(): any { return this.myForm.controls; }
  async registrarClase() {
    try{
      let respuesta: EstudianteDto = await this.api.postGlobal<EstudianteDto>('/estudiante',this.estudianteDto).toPromise();
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
