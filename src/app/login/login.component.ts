import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email : string = '';
  password : string = '';
  constructor(private auth : FirebaseService) { }

  ngOnInit(): void {
  }

  login(){

    if(this.email == ''){
      alert('Please enter email');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';



  }


}
