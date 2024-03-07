import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./models/user.model";

@Injectable()
export class UserService {
    // private _courses: User[] = [
    // ];

    login(user: {}): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(`/login`, user)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    signin(user: User): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(`/login`, user)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    constructor(private _http: HttpClient) { }
}