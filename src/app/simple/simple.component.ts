import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm!: FormGroup;

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   count: new FormControl(0)
    // });

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      count: [0, [Validators.required, Validators.min(5)]],
    });

    // intercettare cambiamenti
    this.myForm.valueChanges
      .pipe(
        map((value) => {
          value.name = value.name.toUpperCase();
          return value;
        }),
        filter((value) => this.myForm.valid)
      )
      .subscribe((value) => {
        console.log("Reactive Form valida = ", value);
      });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid', form.valid);
    console.log('Nome', form.value.name);
    console.log('Email', form.value.email);
    console.log('Conteggio', form.value.count);
    console.log(form.controls["email"].hasError("required"))
    console.log(form.getRawValue());
  }


}
