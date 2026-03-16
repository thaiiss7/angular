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

  // recebe o texto vindo do input pela função changed
  changed = (value: any) => {
    // pega o valor do alvo que disparou o evento
    // target pode ser usado no lugar de srcElement
    this.text = event.srcElement.value;
    console.log(this.text);
    // avisa o componente pai quando o texto muda
    this.Change.emit(this.text);
  }
}
