import { Component, EventEmitter, Output } from '@angular/core';
import { QuizOption } from '../quiz-step/quiz-step.component';

const steps: QuizOption[] = [
  {
    title: 'Set up your goal!',
    subTitle: 'We\'ll help you to create a habit which will move you forward.',
    options: [
      'I want to grow in my career!',
      'I want to be inspired',
      'I want to be an opinion leader',
      'I want to be more productive',
      'I want to learn about a specific topic',
      'I\'m just browsing',
      'Other',
    ],
    isMultiple: false,
  },
  {
    title: 'Select your age',
    options: [
      'Younger than 20',
      '20s',
      '30s',
      '40s',
      '50s',
      '60s',
      '70+',
    ],
    isMultiple: false,
  },
];

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Output() quizFinished = new EventEmitter<void>();
  currentIndex = 0;
  stepsCount = steps.length;
  step = steps[0];

  stepFinished(options: string[]): void {
    if (this.currentIndex + 1 >= this.stepsCount) {
      //TODO: go to next stuff in flow via router
      return;
    }

    this.currentIndex += 1;
    this.step = steps[this.currentIndex];
  }
}
