import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css',
  providers: [CoursesService]
})
export class AllCoursesComponent implements OnInit{

  constructor(private _service: CoursesService){}

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()
  }
}
