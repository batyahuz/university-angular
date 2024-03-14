import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./models/user.model";
import { DataService } from "../../app-components/app.data.service"

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly _dataService: DataService;
    private readonly _serviceName = "/university/";

    private setSessionStorage(data: string, name: string, isLecturer: boolean) {
        sessionStorage.setItem('userToken', 'Bearer ' + data)
        sessionStorage.setItem('userName', name)
        if (isLecturer) {
            sessionStorage.setItem('role', 'lecturer')
        } else {
            sessionStorage.setItem('role', 'user')
        }
    }

    login(user: { userName: "" }, isLecturer: boolean): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(this._serviceName + `login?islecturer=${isLecturer}`, user)
                .subscribe({
                    next: (data: any) => {
                        this.setSessionStorage(data.token, user.userName, isLecturer)
                        res(data)
                    }, error: (error) => {
                        rej(error)
                    }
                })
        })
    }

    signin(user: User): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(this._serviceName + `signin`, user)
                .subscribe({
                    next: (data: any) => {
                        this.setSessionStorage(data.token, user.name, false)
                        res(data)
                    }, error: (error) => { rej(error) }
                })
        })
    }

    signout(): void {
        sessionStorage.removeItem('userToken')
        sessionStorage.removeItem('userName')
        this._dataService.updateDataInLocalStorage()
    }

    constructor(private _http: HttpClient) { }
}