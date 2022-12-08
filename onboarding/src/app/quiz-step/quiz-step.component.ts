import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface QuizOption {
  title: string;
  subTitle?: string;
  options: string[];
  isMultiple: boolean;
}

@Component({
  selector: 'app-quiz-step',
  templateUrl: './quiz-step.component.html',
  styleUrls: ['./quiz-step.component.scss']
})
export class QuizStepComponent implements QuizOption {
  @Input() options: string[] = [];
  @Input() isMultiple: boolean = false;
  @Input() title: string = '';
  @Input() subTitle: string | undefined;

  @Output() stepFinished = new EventEmitter<string[]>();

  selectedOptions: string[] = [];

  buttonClicked(): void {
    if (!this.selectedOptions.length) {
      return;
    }

    this.stepFinished.emit(this.selectedOptions);
  }
}
