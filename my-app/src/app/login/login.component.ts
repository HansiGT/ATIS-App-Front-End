import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password;
  name;

  constructor(private _LoginService: LoginService) { }

  ngOnInit() {
  }

  checkLogin() {
    this._LoginService.getLogin(this.name,this.password).subscribe((data:any) => {console.log(data)});
  }

}
