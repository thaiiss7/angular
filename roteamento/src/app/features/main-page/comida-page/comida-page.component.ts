import { Component } from '@angular/core';
import MockPessoas, { IPessoa } from './Pessoas.mock';
import MockComidas, { IComida } from './comida.mock';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected pessoas: IPessoa[] = []
  protected foods: IComida[] = []
  // protected open = false;
  protected focusedFood?: IComida;

  //vao ser executado quando o compeoenet for inicializado
  constructor () {
    this.pessoas = MockPessoas;
    this.foods = MockComidas;
  }

  openModal(item: IComida) {
    // this.open = true;

    this.focusedFood = item;
  }

  save = () => {
    alert('Pedido efetuado com sucesso!')
  }
}
