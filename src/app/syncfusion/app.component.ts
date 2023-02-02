import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateFrom: Date | null = null;
  public pageSettings: any = { pageSize: 5 };
  public data: object[] = new Array(20).fill(0).map((e, i) => {
    return {
      id: i + 1,
      name: 'Name ' + (i + 1),
      date: new Date(2019, 0, i + 1)
    };
  })
}
