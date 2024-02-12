import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Compra } from '@src/app/interfaces/compra';
import { CompraService } from '@src/app/services/compra.service';
import { timeout } from 'rxjs';

const listCompra: Compra[] = [
  {
    nombre:  'diana', cantidad: 2, email: 'dian@ksk.com', phone: "3105257853"
  }
];

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrl: './listado-compras.component.css'
})
export class ListadoComprasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'cantidad', 'email','phone', 'acciones'];
  dataSource = new MatTableDataSource<Compra>(listCompra);

  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarCompra(){
    this.loading =true;

    setTimeout(() =>{
      this.loading =false;
      this._snackBar.open('La compra fue eliminada con exito', '',{
        duration:4000
      });
    },3000);

  }
  constructor(private _snackBar: MatSnackBar, private _compraService:CompraService) { }

  ngOnInit(): void {
    this.obtenerCompras();
    }

  obtenerCompras(){
    this._compraService.getCompras().subscribe(data => {
      console.log(data);

    })
  }
}
