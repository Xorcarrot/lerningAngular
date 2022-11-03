/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformatikerComponent } from './informatiker.component';

describe('InformatikerComponent', () => {
  let component: InformatikerComponent;
  let fixture: ComponentFixture<InformatikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformatikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformatikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
