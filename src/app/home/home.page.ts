import { Component } from '@angular/core';
import { HTTP } from './http.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(public http: HTTP) {}
}
