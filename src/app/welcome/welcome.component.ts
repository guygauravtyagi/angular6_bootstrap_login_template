import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { Route } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  private loginType: String;
  private sideNavOpen:boolean = true;

  constructor() {
    this.loginType = "Vendor";
   }

  ngOnInit() {

  }

  hideShow = () => this.sideNavOpen = !this.sideNavOpen;

  toggleLoginType = (name) => this.loginType = name;

}
