import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from 'src/app/features/main-page/comida-page/comida.mock';
import { IMercado } from 'src/app/features/main-page/mercado-page/mercado-card/mercado.mock';

@Component({
  selector: 'app-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.css']
})
export class GeneralModalComponent {
  @Input()
  Title: string = ""
  @Input()
  Confirmation: boolean = true
  @Input()
  SaveLabel?: string
  
  @Output()
  onClose: EventEmitter<void> = new EventEmitter();
  @Output()
  onSave: EventEmitter<void> = new EventEmitter();

  close = () => {
    this.onClose.emit();
  }

  save = () => {
    this.onSave.emit();
  }
}
