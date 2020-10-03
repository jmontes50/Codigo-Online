import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariotareaComponent } from './formulariotarea.component';

describe('FormulariotareaComponent', () => {
  let component: FormulariotareaComponent;
  let fixture: ComponentFixture<FormulariotareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariotareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariotareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
