import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {subjects} from "../subjects";

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  subject;
  chapters;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const subjectId = params.get('subjectId');
      this.subject = subjects.find(subject => subject.name === subjectId);
      this.chapters = this.subject.chapters;
    });
  }

}
