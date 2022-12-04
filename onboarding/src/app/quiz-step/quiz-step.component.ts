import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface QuizOption {
  title: string;
  subTitle: string;
  options: string[];
}

@Component({
  selector: 'app-quiz-step',
  templateUrl: './quiz-step.component.html',
  styleUrls: ['./quiz-step.component.scss']
})
export class QuizStepComponent implements QuizOption {
  @Input() options: string[] = [];
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Output() stepFinished = new EventEmitter<string[]>();

  buttonClicked(): void {
    this.stepFinished.emit(['test']);
  }
}
