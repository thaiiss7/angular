import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
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
