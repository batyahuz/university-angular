import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Category } from '../models/category.model';
import { Lecturer } from '../models/lecturer.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css',
  providers: [CoursesService]
})
export class EditCourseComponent implements OnInit {
  id: number;
  courseForm: FormGroup;
  categeries: Category[];
  lecturers: Lecturer[];
  stringDate: string;

  _course: Course;
  get course(): Course { return this._course; }
  set course(value: Course) {
    this._course = value;
    if (this.course != undefined) {
      this.courseForm = new FormGroup({
        name: new FormControl(this.course.name, [Validators.required]),
        categoryId: new FormControl(this.course.categoryId, [Validators.required]),
        numberLessons: new FormControl(this.course.numberLessons, [Validators.required]),
        dateStart: new FormControl(this.course.dateStart, [Validators.required]),
        optionLearning: new FormControl(this.course.optionLearning, [Validators.required]),
        lecturerId: new FormControl(this.course.lecturerId, [Validators.required]),
        cilibus: this.formBuilder.array(this.course.cilibus),
        image: new FormControl(this.course.image, [Validators.required])
      })
    }
  }

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
      console.log('Form is invalid', this.courseForm.value, this.courseForm.errors);
      return;
    }

    this.courseForm.value.optionLearning = parseInt(this.courseForm.value.optionLearning)

    var length = this.cilibusArray.length - 1
    while (this.courseForm.value.cilibus[length] == undefined ||
      this.courseForm.value.cilibus[length] == '') {
      this.courseForm.value.cilibus.pop()
      length--;
    }

    this._service.editCouse(this.id, this.courseForm.value).subscribe({
      next: (data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Perfect',
          text: 'Course has benn saved successfuly :)',
          showConfirmButton: false,
          timer: 2000
        });
        this._router.navigate(['/course/all']);
      }, error: (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! course is not valid"
        });
      }
    })
  }

  constructor(private _service: CoursesService, private _actroute: ActivatedRoute,
    private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()

    this._actroute.paramMap.subscribe(params => this.id = parseInt(params.get('id')))

    this._service.getCourseById(this.id).subscribe({
      next: (data) => {
        console.log('data', data);
        this.course = data;
        this.addCilibus();
      }, error: () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "There is no Course with such a id number"
        });
        this._router.navigate(['/course/all'])
      }
    })

    this._service.getCategories().subscribe({
      next: (data) => {console.log(data);
      
        this.categeries = data}, error: (error) => console.log(error)
    })

    this._service.getLecturers().subscribe({
      next: (data) => this.lecturers = data, error: (error) => console.log(error)
    })
  }
}
