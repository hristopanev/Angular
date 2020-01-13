import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  phoneNumbers: Array<string> = ['+359', '+49'];

  @ViewChild('form', {static: false})
  htmlForm: NgForm;
  model = {};
  constructor() { }

  ngOnInit() {
  }

  register(formData) {
    console.log(formData);
  }

}
