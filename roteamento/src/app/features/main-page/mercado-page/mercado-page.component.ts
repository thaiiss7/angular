import { Component } from '@angular/core';
import MockProdutos, { IMercado } from './mercado-card/mercado.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected products: IMercado[] = []
  protected focusedProduct?: IMercado;

  constructor () {
    this.products = MockProdutos
  }

  openModal(item: IMercado) {
  
      this.focusedProduct = item;
    }
}
