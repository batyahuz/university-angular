import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course, learningOptions } from '../models/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
  providers: [CoursesService]
})
export class AddCourseComponent implements OnInit {
  course: Course = new Course();


  sentreq(): void {
   
    this.course.name = 'name';
    this.course.categoryId = 1;
    this.course.numberLessons = 5;
    this.course.dateStart = new Date('03/02/2024');
    this.course.optionLearning = learningOptions.FRONTAL;
    this.course.lectureId = 1;
    this.course.cilibus = ['fda'];
    this.course.image = 'fda';

    console.log('in sentreq');
    this._service.addCourse(this.course);
  }

  constructor(private _service: CoursesService) { }

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()
  }
}
