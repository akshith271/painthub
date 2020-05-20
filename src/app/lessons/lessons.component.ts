import { Component, OnInit } from '@angular/core';
import {subjects} from "../subjects";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  subjects = subjects;

  constructor() { }

  ngOnInit() {
  }

}
