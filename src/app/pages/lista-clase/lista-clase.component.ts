import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClaseDto } from '../../dto/clase.dto';
import { ApiService } from '../../api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ClaseComponent } from '../clase/clase.component';
import { EstudianteDto } from '../../dto/estudiante.dto';

@Component({
  selector: 'app-lista-clase',
  templateUrl: './lista-clase.component.html',
  styleUrls: ['./lista-clase.component.scss']
})
export class ListaClaseComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idClase', 'codigo', 'titulo', 'descripcion', 'operaciones'];

  dataSource: MatTableDataSource<ClaseDto> = <MatTableDataSource<ClaseDto>>{};

  lstClase: ClaseDto[] = [];
  lstEstudiante: any[] = [];
  nombreClase: string = '';
  @ViewChild(MatPaginator) paginator: MatPaginator =<MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort= <MatSort>{};

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.cargarClases()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  async cargarClases() {
    let respuesta:any = await this.apiService.getGlobal('/clase/listar').toPromise();
    this.lstClase = Object.assign(respuesta)
    console.log(this.lstClase);
    this.dataSource = new MatTableDataSource(this.lstClase);
  }
  async cargarEstudiante(item: ClaseDto) {
    this.nombreClase = item.titulo;
    let respuesta:any = await this.apiService.getGlobal('/estudiante/mostrar-estudiantes/'+item.idClase).toPromise();
    console.log(respuesta);
    this.lstEstudiante = Object.assign(respuesta)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  registrarClase(): void {
    const dialogRef = this.dialog.open(ClaseComponent,{
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cargarClases();
      console.log('The dialog was closed');
    });
  }
  async eliminarClase(item: ClaseDto) {
    console.log(item);
    let conf = confirm('Desea eliminar el dato?');
    if(conf){
      let devuelta = await this.apiService.deleteGlobal('/clase', '/' +item.idClase ).toPromise();
      console.log(devuelta);
      this.cargarClases();
    }

  }
  modificarClase(item: ClaseDto) {
    const dialogRef = this.dialog.open(ClaseComponent,{
      width: '300px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cargarClases();
      console.log('The dialog was closed');
    });
  }


}
