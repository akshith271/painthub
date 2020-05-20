import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {AssignmentComponent} from "../assignment/assignment.component";
import {LessonsComponent} from "../lessons/lessons.component";
import {StreamingComponent} from "../streaming/streaming.component";
import {LoginComponent} from "../login/login.component";
import {SubjectDetailsComponent} from "../subject-details/subject-details.component";
import {ChapterdetailComponent} from "../chapterdetail/chapterdetail.component";

const routes: Routes = [
  { path: 'assignment',  component: AssignmentComponent },
  { path: 'subjects',     component: LessonsComponent },
  { path: 'streaming',     component: StreamingComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'subjects/:subjectId', component: SubjectDetailsComponent },
  { path: 'subjects/:subjectId/:chapterId', component: ChapterdetailComponent },
  { path: '', redirectTo: '/subjects', pathMatch: 'full' }
];

const routing =  RouterModule.forRoot(routes);
@NgModule({
  imports: [
    CommonModule,
   routing
  ],
  declarations: []
})
export class AppRoutingModule { }
