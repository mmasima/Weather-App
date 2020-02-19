import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';
import { ErrorModel } from '../models/error-model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  city = '';
  response: any;
  hasError = false;



  constructor(private http: HttpClient) { }
error: ErrorModel;
  ngOnInit(): void {
  }
  search() {
    this.hasError = false;
    this.error = null;
    this.response = null;
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=8c41b3e543b36aa56130b5e879e98ea9')
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    }, (error) => {
      this.hasError = true;
      this.error = error;
    });
  }
}
