import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/IBooks';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }
  bookLists: Book[];
  title = 'Library Management System';

  ngOnInit() { }

}
