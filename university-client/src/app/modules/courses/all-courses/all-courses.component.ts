import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import Swal from 'sweetalert2';
import { Course } from '../models/course.model';
import { User } from '../../users/models/user.model';
import { Category } from '../models/category.model';
import { Lecturer } from '../models/lecturer.model';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css',
  providers: [CoursesService]
})
export class AllCoursesComponent implements OnInit {

  courses: Course[];
  categories: Category[];
  lecturers: Lecturer[];
  user: User;
  isInstructor: boolean = true;
  optionLearning: string;

  filterByName: string | null = null;
  filterByCategoryId: number | null = null;
  filterByOption: number | null = null;
  searchTerms = new Subject<{ name: string, category: number, option: number }>();

  userIsLecturer(): boolean {
    return this._service.isLecturer()
  }

  matchCategory(id: number): Category {
    return this.categories?.find((c) => c.id == id)
  }

  matchLecturer(id: number): Lecturer {
    return this.lecturers?.find((l) => l.id == id)
  }

  navigateToDetails(id: number) {
    if (this._service.isConnected())
      this._router.navigate([`/course/details/${id}`])
  }

  search(name: string, value: string) {
    switch (name) {
      case 'name': this.filterByName = value == '' ? null : value
        break;
      case 'category': this.filterByCategoryId = (value == '0' ? null : parseInt(value))
        break;
      case 'option': this.filterByOption = (value == '0' ? null : parseInt(value))
    }
    this.searchTerms.next({
      name: this.filterByName, category: this.filterByCategoryId, option: this.filterByOption
    })
  }


  constructor(private _service: CoursesService, private _router: Router) { }

  ngOnInit(): void {
    this._service.navigateIfNotLoggedIn()

    this.searchTerms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((res) => this._service.getCoursesByFilters(res))
    )
      .subscribe((res) => this.courses = res)

    this._service.getCourses().subscribe({
      next: (data) => this.courses = data,
      error: () => {
        Swal.fire({ icon: "error", title: "Oops...", text: "you are not logged in. enter ->" })
        this._router.navigate(['/user/login'])
      }
    })

    this._service.getCategories().subscribe((data) => this.categories = data)

    this._service.getLecturers().subscribe((data) => this.lecturers = data)
  }
}
