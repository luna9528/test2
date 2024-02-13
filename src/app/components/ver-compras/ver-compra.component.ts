import { Component, OnInit } from '@angular/core';
import { CompraService } from '@src/app/services/compra.service';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.component.html',
  styleUrl: './ver-compra.component.css'
})
export class VerCompraComponent implements OnInit {
  constructor(private _CompraSErvice: CompraService){}
  ngOnInit(): void {
   /* this.obtenerCompra();*/
  }
  /*obtenerCompra(){
    this._CompraSErvice.getCompra(2).subscribe(data =>{
      console.log(data)
    })
  }*/
}
