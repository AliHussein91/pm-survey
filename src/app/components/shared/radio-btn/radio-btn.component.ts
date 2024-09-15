import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-btn',
  standalone: true,
  imports: [],
  templateUrl: './radio-btn.component.html',
  styleUrl: './radio-btn.component.scss'
})
export class RadioBtnComponent {
  @Input({ required: true }) name!: any
  @Input({ required: true }) answers!: string[]
  @Output() change = new EventEmitter()
  changed(event: Event ) {
    event.stopPropagation();
    this.change.emit(event.target);
  }

}
