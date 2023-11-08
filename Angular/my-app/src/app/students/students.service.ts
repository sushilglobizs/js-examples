import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents() {
    return [{
      name: "John",
      rollNo: 26,
      course: "B.Sc. Maths",
      gender: "Male",
      semester: "IV"
    }, {
      name: "Alice",
      rollNo: 27,
      course: "B.Sc. Maths",
      gender: "Female",
      semester: "IV"
    }, {
      name: "Jack",
      rollNo: 29,
      course: "B.Sc. Maths",
      gender: "Male",
      semester: "IV"
    }];
  }
}
