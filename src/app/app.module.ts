import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import 'hammerjs';
import {LessonsComponent} from './lessons/lessons.component';
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {AssignmentComponent} from './assignment/assignment.component';
import {StreamingComponent} from './streaming/streaming.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { QuizComponent } from './quiz/quiz.component';
import { TopicComponent } from './topic/topic.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { ChapterdetailComponent } from './chapterdetail/chapterdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AssignmentComponent,
    StreamingComponent,
    QuizComponent,
    TopicComponent,
    SubjectDetailsComponent,
    ChapterdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
