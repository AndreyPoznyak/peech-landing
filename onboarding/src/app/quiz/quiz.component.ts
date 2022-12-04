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
    ]
  }
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
  steps: QuizOption[] = steps;
}
