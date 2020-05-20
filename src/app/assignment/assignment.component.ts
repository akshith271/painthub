import { Component, OnInit } from '@angular/core';
import {subjects} from "../subjects";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  subjects = subjects;
  constructor() { }

  ngOnInit() {
  }

}
