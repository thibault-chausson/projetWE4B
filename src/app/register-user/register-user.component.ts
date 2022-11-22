import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  email: string = '';
  password: string = '';
  passwordCheck : string = '';

  user = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    pwd : new FormControl('', [Validators.required, Validators.minLength(6)]),
    pwdCheck : new FormControl('', [Validators.required]),

  });

  get emailControl() {
    this.email = this.user.get('email')?.value;
    return this.user.get('email');
  }

  get pass1() {
    this.password = this.user.get('pwd')?.value;
    return this.user.get('pwd');
  }

  get pass2() {
    this.passwordCheck = this.user.get('pwdCheck')?.value;
    return this.user.get('pwdCheck');
  }


  constructor(private auth: FirebaseService) {}

  ngOnInit(): void {
  }

  doSth() {

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
