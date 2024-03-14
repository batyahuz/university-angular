import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../app.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]
})
export class AppComponent implements OnInit {
  userName?: string;
  userRole?: string;
  isUser: boolean = false;

  logOut(): void {
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('userToken')
    sessionStorage.removeItem('role')
  }

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.isUser = this._dataService.isConnected()
      this.userName = this._dataService.getUserName()
      this.userRole = this._dataService.getUserRole()
    }, 1000)
  }

}
