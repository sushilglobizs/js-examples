import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      noOfPersons: new FormControl('', [
        Validators.max(4),
        Validators.min(1)
      ]),
      roomType: new FormControl('', Validators.required),
    });
  }

  get name() {
    return this.myForm.get('name');
  }
  get noOfPersons() {
    return this.myForm.get('noOfPersons');
  }
  get roomType() {
    return this.myForm.get('roomType');
  }

  formSubmit() {
  }
  
}
