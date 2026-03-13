import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  // @Input()
  // message: string = "";

  @Output()
  messageEvent = new EventEmitter<string>();

  sendText(value: string) {
    this.messageEvent.emit(value)
  }
}
