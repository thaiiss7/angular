import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
import { IComida } from 'src/app/features/main-page/comida-page/comida.mock';
import { IMercado } from 'src/app/features/main-page/mercado-page/mercado-card/mercado.mock';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input()
  item?: IComida | IMercado;

  @Output()
  onClose: EventEmitter<void> = new EventEmitter();

  close = () => {
    this.onClose.emit()
  }
}
