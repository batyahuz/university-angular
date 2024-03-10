
import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  user: LoginModel = new LoginModel;

  userForm: FormGroup = new FormGroup({
    "userName": new FormControl(this.user.name, [Validators.required]),
    "password": new FormControl(this.user.password, [Validators.required])
  })


  login() {
    console.log('in login function! userForm:', this.userForm.value);
    const f = this._userService.login(this.userForm.value);
    console.log('f = ', f);

    // const userExists = this._userService.login({ name: this.user.name, password: this.user.password })
    // if (userExists) {
    //   const validPassword = this._userService.checkPassword(this.username, this.password);
    //   if (validPassword) {
    //     this.loginError = ''; this.courseName = this._userService.getCourseName(this.username);
    //   } else {
    //     this.loginError = 'Incorrect password. Please try again.';
    //   }
    // } else {
    //   this.loginError = 'User does not exist. Please register first.'; // You may choose to navigate to the register component here 
    // }
  }

  constructor(private _userService: UserService) { }
}

