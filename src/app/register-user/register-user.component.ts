import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  email: string = '';
  password: string = '';
  passwordCheck : string = '';


  constructor(private auth: FirebaseService) {
  }

  ngOnInit(): void {
  }

  register() {

    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    if(this.password != this.passwordCheck){
      alert('Il y a une erreur dans la vérification du mot de passe !');
      return;
    }

    this.auth.register(this.email, this.password);

    this.email = '';
    this.password = '';
    this.passwordCheck ='';

  }

}
