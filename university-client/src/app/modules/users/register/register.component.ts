import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup = new FormGroup({
    "name": new FormControl(this.user.password, [Validators.required, Validators.minLength(2)]),
    "address": new FormControl(this.user.password, [Validators.required]),
    "email": new FormControl(this.user.email, [Validators.required,]),
    "password": new FormControl(this.user.password, [Validators.required, Validators.minLength(2)]),
  })

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this._userService.signin(this.userForm.value).then(() => {
      this._router.navigate(['/course/all']);
      Swal.fire({
        position: "top-end", icon: "success", title: 'Perfect',
        text: 'Course has been saved successfuly :)', showConfirmButton: false, timer: 2000
      })
    }).catch((error) => {
      Swal.fire({ icon: "error", title: "Oops...", text: error.error.error })
    })
  }

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.userForm.controls['name'].setValue(history.state.name);
  }
}
