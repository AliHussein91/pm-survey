import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {
  score: number = 0
  strokeDashArray: number = 615
  bgColor: string = 'transparent'
  router = inject(Router)

  showScore() {
    let i = setInterval(() => {
      this.score < 67 ? this.score += 1 : clearInterval(i)
    }, 10);
    let s = setTimeout(() => {
      this.strokeDashArray = 1230
    }, 10);
    let c = setTimeout(() => {
      this.bgColor = '#3eb8e5'
    }, 800);
    let t = setTimeout(() => {
      clearInterval(i)
      clearTimeout(t)
      clearTimeout(s)
      clearTimeout(c)
      this.router.navigateByUrl('/summary')
    }, 2000);
  }

  ngOnInit(): void {
    this.showScore()
  }

}
