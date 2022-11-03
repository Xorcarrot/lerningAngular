/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoteGraphComponent } from './voteGraph.component';

describe('VoteGraphComponent', () => {
  let component: VoteGraphComponent;
  let fixture: ComponentFixture<VoteGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
