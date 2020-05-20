import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {subjects} from "../subjects";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-chapterdetail',
  templateUrl: './chapterdetail.component.html',
  styleUrls: ['./chapterdetail.component.scss']
})
export class ChapterdetailComponent implements OnInit {
  currentChapter;
  chapters;
  currentSubjectName;
  src1='paint-hub/src/assets/videos/mov_bbb.mp4';
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const subjectName = params.get('subjectId');
      this.currentSubjectName = subjectName;
      const chapterId = params.get('chapterId');
      const subject = subjects.find(subject => subject.name === subjectName);
      this.chapters = subject.chapters;
      this.currentChapter = subject.chapters[chapterId];
    });
  }

  getUrl(url) {
   return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
