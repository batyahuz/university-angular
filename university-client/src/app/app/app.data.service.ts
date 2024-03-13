import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    dataChanged = new EventEmitter<void>();

    constructor() { }


    getUserName(): string {
        return sessionStorage.getItem('userName')
    }

    getUserRole(): string {
        return sessionStorage.getItem('role')
    }

    isConnected(): boolean {
        return sessionStorage.getItem('userToken') != null
    }

    updateDataInLocalStorage(): void {
        this.dataChanged.emit();
    }
}
