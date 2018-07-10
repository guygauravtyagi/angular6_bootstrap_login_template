import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginActive:boolean = true;

  constructor() { }

  ngOnInit() {

  }

  toggleLoginSignUp = function () {
    this.loginActive = !this.loginActive;
    if (this.loginActive) {

    } else {

    }
    return this.loginActive;
  }

}
