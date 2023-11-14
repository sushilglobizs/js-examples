import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student = {
    stuName: '',
    rollNo: 0,
    email: '',
    favDrink: ''
  };

  constructor() {}

  ngOnInit() {
  }

  formSubmit(studentForm: NgForm) {
    console.log(studentForm.value['stuName']);
    console.log(studentForm.value['rollNo']);
  }

}
