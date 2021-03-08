import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteDto } from '../../dto/estudiante.dto';
import { EstudianteComponent } from '../estudiante/estudiante.component';
import { AsignarClaseComponent } from '../asignar-clase/asignar-clase.component';
import { ClaseDto } from '../../dto/clase.dto';


@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.scss']
})
export class ListaEstudianteComponent implements OnInit {
  displayedColumns: string[] = ['idEstudiante', 'identificacionEstudiante', 'nombre', 'apellido', 'operaciones'];
  dataSource: MatTableDataSource<EstudianteDto> = <MatTableDataSource<EstudianteDto>>{};
  lstEstudiante: EstudianteDto[] = [];
  lstClase: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator =<MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort= <MatSort>{};
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.cargarEstudiante()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  async cargarEstudiante() {
    let respuesta:any = await this.apiService.getGlobal('/estudiante/listar').toPromise();
    this.lstEstudiante = Object.assign(respuesta)
    console.log(this.lstEstudiante);
    this.dataSource = new MatTableDataSource(this.lstEstudiante);
  }
  async cargarClases(item: EstudianteDto) {
    let respuesta:any = await this.apiService.getGlobal('/clase/mostrar-clase/' + item.idEstudiante).toPromise();
    this.lstClase = Object.assign(respuesta)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  registrarEstudiante(): void {
    const dialogRef = this.dialog.open(EstudianteComponent,{
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cargarEstudiante();
      console.log('The dialog was closed');
    });
  }
  async eliminarClase(item: EstudianteDto) {
    console.log(item);
    let conf = confirm('Desea eliminar el dato?');
    if(conf){
      let devuelta = await this.apiService.deleteGlobal('/estudiante', '/' +item.idEstudiante ).toPromise();
      console.log(devuelta);
      this.cargarEstudiante();
    }

  }
  modificarClase(item: EstudianteDto) {
    const dialogRef = this.dialog.open(EstudianteComponent,{
      width: '300px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cargarEstudiante();
      console.log('The dialog was closed');
    });
  }
  asignarClase(item:EstudianteDto) {
    const dialogRef = this.dialog.open(AsignarClaseComponent,{
      width: '300px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cargarEstudiante();
      console.log('The dialog was closed');
    });
  }
}
