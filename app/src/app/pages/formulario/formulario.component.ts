import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  formulario: FormGroup = this.fb.group({
    name: ['Pepe Perez'],
    job: ['carpintero']
  });

  constructor(private fb: FormBuilder,) {
  }

  ngOnInit(): void {
  }

  deshabilitarJob() {
    this.formulario.controls['job'].disable();
    //this.formulario.controls['job'].updateValueAndValidity();
  }

  habilitarJob() {
    this.formulario.controls['job'].enable();
    //this.formulario.controls['job'].updateValueAndValidity();
  }

  deshabilitarFormularo() {
    this.formulario.disable();
  }

  habilitarFormularo() {
    this.formulario.enable();
  }

}
