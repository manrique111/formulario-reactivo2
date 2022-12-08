import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  formulario: FormGroup = this.fb.group({
    name: [{value: 'Pepe Perez', disabled: false}],
    job: [{value: 'carpintero', disabled: false}]
  });

  constructor(private fb: FormBuilder,) {
  }

  ngOnInit(): void {
  }

  deshabilitarJob() {
    this.formulario.controls['job'].disabled;
  }

  habilitarJob() {
    this.formulario.controls['job'].enable();
  }

}
