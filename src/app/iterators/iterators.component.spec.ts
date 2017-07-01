import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratorsComponent } from './iterators.component';

describe('IteratorsComponent', () => {
  let component: IteratorsComponent;
  let fixture: ComponentFixture<IteratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
