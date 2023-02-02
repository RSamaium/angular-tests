import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    getTitle() {
        if (true) {
            throw new Error('test')
        }
        return 'Mon App'
    }
}