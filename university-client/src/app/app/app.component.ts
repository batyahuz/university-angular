import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from './app.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements OnInit, OnDestroy*/ {
  // // user = sessionStorage.getItem('userName')
  // data: any;
  // dataSubscription: Subscription;
  // // userObservable: Observable<string>;//=new Observable((observer) => { this.students?.forEach(s => { observer.next(s.name) }); });
  // logOut(): void {
  //   sessionStorage.removeItem('userName')
  //   sessionStorage.removeItem('userToken')

  //   console.log(sessionStorage.removeItem('userName'),
  //     sessionStorage.removeItem('userToken'));

  //     this.data = this.dataService.getDataFromSessionStorage();
  // }

  // constructor(private dataService: DataService) { }

  // ngOnInit(): void {
  //   this.data = this.dataService.getDataFromSessionStorage();
  //   this.dataSubscription = this.dataService.dataChanged.subscribe(() => {
  //     this.data = this.dataService.getDataFromSessionStorage();
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (this.dataSubscription) {
  //     this.dataSubscription.unsubscribe();
  //   }
  // }
}
