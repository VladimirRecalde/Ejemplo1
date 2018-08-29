import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DearPuppyComponentComponent } from './dear-puppy-component.component';

describe('DearPuppyComponentComponent', () => {
  let component: DearPuppyComponentComponent;
  let fixture: ComponentFixture<DearPuppyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DearPuppyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DearPuppyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
