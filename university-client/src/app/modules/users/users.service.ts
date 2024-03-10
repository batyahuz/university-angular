import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // private _courses: User[] = [
    // ];
    private readonly _serviceName = "/university/";

    login(user: {}): Promise<any> {
        console.log('in login service: user:', user);

        return new Promise((res, rej) => {
            // this._http.post(`${this._serviceName}login`, user)
            this._http.post("/university/login", user)
                .subscribe({
                    next: (data) => res(data), error: (error) => {
                        console.log('in ERROR in login servoce');
                        rej(error)
                    }
                })
        })
    }

    signin(user: User): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(this._serviceName + `signin`, user)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    constructor(private _http: HttpClient) { }
}