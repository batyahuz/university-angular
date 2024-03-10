import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user :User=new User;
  userForm: FormGroup=new FormGroup({
    // "name": מקבל את מה שהקיש לפני או שריק
    "password": new FormControl(this.user.password, [Validators.required]),
    "email": new FormControl(this.user.email, [Validators.required])
  })


  register(): void {
  }

  constructor(/*private _userService: UserService*/) { }
}
