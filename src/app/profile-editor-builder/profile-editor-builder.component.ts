import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-editor-builder',
  templateUrl: './profile-editor-builder.component.html',
  styleUrls: ['./profile-editor-builder.component.scss']
})
export class ProfileEditorBuilderComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    gender: ['m'],
    age: [76, Validators.min(18)],
    active: [true],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(v => {
      console.log(v);
    })

    this.profileForm.statusChanges.subscribe(status => {
      console.log(status);
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    console.log('Valid', this.profileForm.valid);
    console.log('Nome', (this.profileForm.value as Profile).gender);
    console.log(this.profileForm.controls["firstName"].hasError("required"))
  }
}
