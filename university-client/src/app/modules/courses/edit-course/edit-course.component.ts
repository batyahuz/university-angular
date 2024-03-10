import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css',
  providers: [CoursesService]
})
export class EditCourseComponent implements OnInit {

  constructor(private _service: CoursesService) { }
  
  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()
  }
}
