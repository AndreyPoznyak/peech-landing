import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStepComponent } from './quiz-step.component';

describe('QuizStepComponent', () => {
  let component: QuizStepComponent;
  let fixture: ComponentFixture<QuizStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
