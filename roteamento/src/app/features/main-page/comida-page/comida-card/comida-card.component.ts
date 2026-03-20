import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from '../comida.mock';

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent {
  @Input()
  value!: IComida;
}
