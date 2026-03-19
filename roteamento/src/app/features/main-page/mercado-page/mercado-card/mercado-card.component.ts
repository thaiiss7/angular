import { Component, Input } from '@angular/core';
import MockProdutos, { IMercado } from './mercado.mock';

@Component({
  selector: 'app-mercado-card',
  templateUrl: './mercado-card.component.html',
  styleUrls: ['./mercado-card.component.css'],
})
export class MercadoCardComponent {
  @Input()
  value!: IMercado;
}
