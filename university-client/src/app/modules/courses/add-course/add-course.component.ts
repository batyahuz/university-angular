import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course, learningOptions } from '../models/course.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { Lecturer } from '../models/lecturer.model';
import { error } from 'console';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
  providers: [CoursesService]
})
export class AddCourseComponent implements OnInit {

  course: Course = new Course();
  categeries: Category[];
  lecturers: Lecturer[];

  courseForm: FormGroup = new FormGroup({
    name: new FormControl(this.course.name, [Validators.required,]),
    categoryId: new FormControl(this.course.categoryId, [Validators.required, Validators.min(1)]),
    numberLessons: new FormControl(this.course.numberLessons, [Validators.required, Validators.min(1)]),
    dateStart: new FormControl(this.course.dateStart, [Validators.required]),
    optionLearning: new FormControl(this.course.optionLearning, [Validators.required]),
    lecturerId: new FormControl(this.course.lecturerId, [Validators.required, Validators.min(1)]),
    cilibus: this.formBuilder.array([]),
    image: new FormControl(this.course.image, [Validators.required])
  })

  get cilibusArray() {
    return this.courseForm.get('cilibus') as FormArray;
  }

  addCilibus() {
    this.cilibusArray.push(this.formBuilder.control(''));
  }

  removeCilibus(index: number) {
    this.cilibusArray.removeAt(index);
  }

  onCilibusChange(index: number): void {
    const length = this.cilibusArray.length;

    if (index === length - 1 && this.courseForm.get('cilibus.' + index).value !== '') {
      this.addCilibus();
    }

    if (this.courseForm.get('cilibus.' + index).value === '' && length > 1) {
      this.removeCilibus(index);
    }
  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return;
    }

    this.courseForm.value.optionLearning = parseInt(this.courseForm.value.optionLearning)

    this._service.addCourse(this.courseForm.value).subscribe({
      next: (data) => {
        Swal.fire({
          position: "top-end", icon: "success", title: 'Perfect',
          text: 'Course has been saved successfuly :)', showConfirmButton: false, timer: 2000
        })
        this._router.navigate(['/course/all']);
      }, error: (error) => {
        Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong! course is not valid" })
      }
    })
  }

  constructor(private _service: CoursesService, private formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()
    if (!this._service.isLecturer()) {
      this._router.navigate(['/'])
    }

    this.addCilibus()

    this._service.getCategories().subscribe({
      next: (data) => this.categeries = data, error: () => Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "you are not logged in. enter ->"
      })
    })

    this._service.getLecturers().subscribe({
      next: (data) => this.lecturers = data,
      error: () => Swal.fire({ icon: "error", title: "Oops...", text: "you are not logged in. enter ->" })
    })
  }
}
