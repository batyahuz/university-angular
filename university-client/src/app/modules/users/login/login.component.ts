
import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  user: LoginModel = new LoginModel;

  nameInvalid: boolean;
  nameInvalidValue: string;

  passwordInvalid: boolean;
  passwordInvalidValue: string;

  userForm: FormGroup = new FormGroup({
    "userName": new FormControl(this.user.name, [Validators.required, Validators.minLength(2)]),
    "password": new FormControl(this.user.password, [Validators.required, Validators.minLength(2)])
  })


  onSubmit() {
    this._userService.login(this.userForm.value).then(() => {
      this._router.navigate(['/']);
    }).catch((error) => {
      console.log('error', error);
      if (error.error.error === 'user') {
        console.log('user name is invalid');//swel
        this.nameInvalidValue = this.userForm.controls['userName'].value;
        this.nameInvalid = true;
        console.log(this.nameInvalid);
        console.log(this.nameInvalidValue);
      } else {
        console.log('password in not valid');//swel
        this.passwordInvalidValue = this.userForm.controls['password'].value;
        this.passwordInvalid = true;
      }
    })
  }

  constructor(private _userService: UserService, private _router: Router) { }
}

