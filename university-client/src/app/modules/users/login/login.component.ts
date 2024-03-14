
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
  courseName: string = '';
  setIsLecturer(): void {
    if (this.isLecturer)
      this.userForm.removeControl("courseName")
    else
      this.userForm.addControl("courseName", new FormControl(this.courseName, [Validators.required]))
    this.isLecturer = !this.isLecturer;
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this._userService.login(this.userForm.value, this.isLecturer).then(() => {
      this._router.navigate(['/course/all']);
    }).catch((error) => {
      if (error.error.error === 'user') {
        Swal.fire({
          icon: "error", title: "user name is not valid", showConfirmButton: true, showDenyButton: true,
          text: `Are you a ${this.isLecturer ? 'student' : 'lecturer'}?`,
          confirmButtonText: `I'm a ${this.isLecturer ? 'student' : 'lecturer'}`,
          denyButtonText: "I want to register"
        }).then((res) => {
          if (res.isConfirmed) {
            this.isLecturer = !this.isLecturer
          } else {
            this._router.navigate(
              ['/user/register'],
              { state: { name: this.userForm.controls['userName'].value } }
            )
          }
        })
      } else {
        Swal.fire({ icon: "error", title: "Oops...", text: "password is not valid" })
      }
    })
  }

  constructor(private _userService: UserService, private _router: Router) { }
}

