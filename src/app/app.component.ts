import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  response: '';

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    const obs = this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=8c41b3e543b36aa56130b5e879e98ea9');
    obs.subscribe((response) => console.log(response));
  }
}
