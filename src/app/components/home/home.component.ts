import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  screen: boolean = false
  ngOnInit(): void {
    if (window.screen.width > 1290) {
      this.screen = true;
    }
  }

}
