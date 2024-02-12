import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compra } from '@src/app/interfaces/compra';
import { first } from 'rxjs';

@Component({
  selector: 'app-agregar-editar-compra',
  templateUrl: './agregar-editar-compra.component.html',
  styleUrl: './agregar-editar-compra.component.css',
})
export class AgregarEditarCompraComponent {

  loading: boolean= false;
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nombre:['', Validators.required],
      cantidad:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required, Validators.pattern('^[0-9]{8,10}$')],
      })
  }

  ngOnInit(): void{


  }

  agregarCompras(){
    const nombre = this.form.get('nombre')?.value;
    const cantidad = this.form.value.cantidad;
    const email = this.form.value.email;
    const phone = this.form.value.phone;
  //armado el objeto
    const compra: Compra = {
      nombre:this.form.value.nombre,
      cantidad: this.form.value.cantidad,
      email: this.form.value.correo,
      phone: this.form.value.phone

    }
  }
}
