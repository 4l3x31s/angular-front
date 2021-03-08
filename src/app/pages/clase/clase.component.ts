import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaseDto } from '../../dto/clase.dto';
import { ApiService } from '../../api/api.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent implements OnInit {
  public myForm: FormGroup = <FormGroup>{};
  public claseDto: ClaseDto = <ClaseDto>{}
  constructor(
    public fb: FormBuilder,
    public api: ApiService,
    public dialogRef: MatDialogRef<ClaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClaseDto
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.claseDto = this.data;
    }
    this.iniciarValidaciones();
  }
  iniciarValidaciones() {
    this.myForm = this.fb.group({
      vCodigo: ['', [
        Validators.maxLength(50),
        Validators.required,
      ]],
      vTitulo: ['', [
        Validators.maxLength(150),
        Validators.required,
      ]],
      vDescripcion: ['', [
        Validators.required,
      ]],
    });
  }
  get f(): any { return this.myForm.controls; }
  async registrarClase() {
    try{
      let respuesta = await this.api.postGlobal('/clase',this.claseDto).toPromise();
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
