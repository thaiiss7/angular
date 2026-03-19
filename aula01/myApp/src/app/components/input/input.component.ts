import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  label: string = "";
  @Input()
  value: string = "";

  @Output()
  messageEvent: EventEmitter<string> = new EventEmitter();

  // recebe o texto vindo do input pela função changedText
  changedText = (value: any) => {

    // pega o valor do alvo que disparou o evento
    // target pode ser usado no lugar do target
    const stringValue = value.target.value
    console.log(value.target.value);

    // avisa o componente pai quando o texto muda
    this.messageEvent.emit(stringValue);
  }
}
