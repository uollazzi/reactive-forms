import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Field } from '../models/field';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {

  formModel: Field<any>[] = [
    new Field<string>("", "nome", "Nome", true),
    new Field<number>(0, "anni", "Anni", true, "number")
  ];

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const group: any = {};
    this.formModel.forEach(campo => {
      group[campo.key] = campo.required ? new FormControl(campo.value, Validators.required) : new FormControl(campo.value);
    });

    this.form = new FormGroup(group);
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.form.getRawValue());
  }

}
