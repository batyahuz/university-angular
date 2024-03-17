import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category.model';
import { Lecturer } from '../models/lecturer.model';
import { LearningOptionIconPipe } from '../learning.option.icon.pipe'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
  providers: [CoursesService, LearningOptionIconPipe]
})
export class CourseDetailsComponent implements OnInit {

  course: Course = new Course();
  isLecturer: boolean;
  category: Category;
  lecturer: Lecturer;

  editCourse(){
    this._router.navigate(['/course/edit/'+this.course.id])
  }

  constructor(private _service: CoursesService,
    private learningOptionIcon: LearningOptionIconPipe,
    private _router: Router,
    private _actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()

    var id: number;
    this._actroute.params.subscribe(params => id = parseInt(params['id']))
    this._service.getCourseById(id).subscribe({
      next: (data) => this.course = data,
      error: () => Swal.fire({ icon: "error", title: "Oops...", text: "can't connect to server" })
    })

    this._service.getCategories().subscribe((data) => this.category = data.find(c => c.id == this.course.categoryId))

    this._service.getLecturers().subscribe((data) => this.lecturer = data.find(l => l.id == this.course.lecturerId))

    this.isLecturer = sessionStorage.getItem('role') == 'lecturer';
  }
}
