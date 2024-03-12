import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
  providers: [CoursesService]
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  

  constructor(private _service: CoursesService, private _actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()

    var id: number;
    this._actroute.params.subscribe(params => id = parseInt(params['id']))
    this._service.getCourseById(id)
    .subscribe({ next: (data) => this.course = data, error: (error) => console.log(error) })
  }
}
