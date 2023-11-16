import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from './company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  company: Company = {
    companyName: '',
    name: '',
    aadhaarNo: null,
    panNo: null,
    mobileNo: null
  };

  submit(form: NgForm) {

  }

}
