import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  getData: string;
  getPost: string;

  constructor() { }

  ngOnInit() {
  }

}