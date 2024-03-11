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
    /*
     public id!: number;
    public name!: string;
    public categoryId!: number;
    public numberLessons!: number;
    public dataStart!: Date;
    public optionLearning!: learningOptions;
    public lectureId!: number;
    public image!: string; */
    this.course.name = 'name';
    this.course.categoryId = 1;
    this.course.numberLessons = 5;
    this.course.dataStart = new Date('03/02/2024');
    this.course.optionLearning = learningOptions.FRONTAL;
    this.course.lectureId = 1;
    this.course.image = 'fda';

    console.log('in sentreq');
    this._service.addCourse(this.course);
  }

  constructor(private _service: CoursesService) { }

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()
  }
}
