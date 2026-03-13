import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked = false;
  // passar do filho para o pai
  @Output()
  onClick: EventEmitter<void> = new EventEmitter()

  @Input()
  label: string = "";

  clicked = () => {
    // console.log("clicado");
    // this.isClicked = !this.isClicked;

    this.onClick.emit();
  }
}
