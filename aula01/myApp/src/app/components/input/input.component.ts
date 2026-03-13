import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output()
  messageEvent = new EventEmitter<string>();

  @Input()
  label: string = "";
  text: string = "";

  changed = (value: any) => {
    this.text = event.srcElement.value;
    console.log(this.text);
    this.Change.emit(this.text);
  }
}
