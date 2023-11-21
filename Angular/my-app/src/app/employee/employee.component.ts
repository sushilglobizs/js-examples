import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee: Employee = {
    id: null,
    name: '',
    designation: '',
    gender: ''
  };

  designations = [{
    name: 'Accountant',
    value: 'accountant'
  }, {
    name: 'Developer',
    value: 'developer'
  }, {
    name: 'Director',
    value: 'director'
  }, {
    name: 'Digital Marketer',
    value: 'digital-marketer'
  }, ];

  formSubmit(form: NgForm) {
    this.employee = form.value;
  }

}
