import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ProgressBarComponent } from "../shared/progress-bar/progress-bar.component";
import { QuestionsList } from '../../interfaces/questions-list';
import { QuestionService } from '../../serivces/question.service';
import { RadioBtnComponent } from "../shared/radio-btn/radio-btn.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ProgressBarComponent, RadioBtnComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent implements OnInit {
  @Input() id!: 'male' | 'female'

  questionList!: QuestionsList;
  questionsCount!: number
  currentQuestion: number = 1
  progress!: string
  userAnswers: { id: number, answer: string }[] = []
  questionId: number = 1

  router = inject(Router)
  questionsService = inject(QuestionService)
  @ViewChild('scrollWrapper') scroller!: ElementRef;
  @ViewChild('answerGroup') answerGroup!: ElementRef;

  ngOnInit(): void {
    this.questionList = this.questionsService.questions[`${this.id}`]
    this.questionsCount = this.questionList.questions.length
    this.progress = ((this.currentQuestion / this.questionsCount) * 100).toString() + '%'
  }

  scrollLeft() {
    if (this.currentQuestion > 1) {
      this.scroller.nativeElement.scrollBy({
        left: -this.scroller.nativeElement.offsetWidth,
      })
      this.currentQuestion -= 1
      this.progress = ((this.currentQuestion / this.questionsCount) * 100).toString() + '%'
    }

  }
  scrollRight() {
    if (this.currentQuestion < this.questionsCount) {
      this.scroller.nativeElement.scrollBy({
        left: this.scroller.nativeElement.offsetWidth,
      })
      this.currentQuestion += 1
      this.progress = ((this.currentQuestion / this.questionsCount) * 100).toString() + '%'

    } else if (this.currentQuestion === this.questionsCount) {
      this.router.navigateByUrl('/result')
    }

  }

  collectAnswers(answer: HTMLInputElement, questionId: number) {
    this.scrollRight();
    if (this.userAnswers.length === 0) {
      this.userAnswers.push({ id: questionId, answer: answer.value })
      return
    } else {
      for (let i = 0; i < this.userAnswers.length; i++) {
        const obj = this.userAnswers[i];
        if (obj.id === questionId) {
          console.log(obj.id, questionId, i);
          this.userAnswers.splice(i, 1)
          this.userAnswers.push({ id: questionId, answer: answer.value })
          return
        }
      }
      this.userAnswers.push({ id: questionId, answer: answer.value })
      return
    }
  }
}
