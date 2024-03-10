import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
  providers: [CoursesService]
})
export class AddCourseComponent  implements OnInit{

  constructor(private _service: CoursesService) { }
  
  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()
  }
}
