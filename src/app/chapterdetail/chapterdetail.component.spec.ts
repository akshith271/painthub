import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterdetailComponent } from './chapterdetail.component';

describe('ChapterdetailComponent', () => {
  let component: ChapterdetailComponent;
  let fixture: ComponentFixture<ChapterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
