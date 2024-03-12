import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService]
})
export class RegisterComponent {
  user: User = new User;
  userForm: FormGroup = new FormGroup({
    "name": new FormControl(this.user.password, [Validators.required, Validators.minLength(2)]),
    "address": new FormControl(this.user.password, [Validators.required]),
    "email": new FormControl(this.user.email, [Validators.required, Validators.email]),
    "password": new FormControl(this.user.password, [Validators.required, Validators.minLength(2)]),
  })

  onSubmit() {
    this._userService.signin(this.userForm.value).then(() => {
      this._router.navigate(['/']);
    }).catch((error) => {
      console.log('error', error);
    })
  }

  constructor(private _userService: UserService, private _router: Router) { }
}
