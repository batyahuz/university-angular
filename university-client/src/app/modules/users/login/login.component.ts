
import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  isLecturer: boolean = false;
  setIsLecturer(): void {
    this.isLecturer = !this.isLecturer;
  }

  onSubmit() {
    this._userService.login(this.userForm.value).then(() => {
      this._router.navigate(['/course/all']);
    }).catch((error) => {
      if (error.error.error === 'user') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "user name is invalid"
        });
        this._router.navigate(['/user/register'], { state: { name: this.userForm.controls['userName'].value } });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "password in not valid"
        });
      }
    })
  }

  constructor(private _userService: UserService, private _router: Router) { }
}

