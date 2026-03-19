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

  //vao ser executado quando o compeoenet for inicializado
  constructor () {
    this.pessoas = MockPessoas;
    this.foods = MockComidas;
  }

  // item = {}

  // sendData = (value: object) => {
  //   this.item = value;
  // }
}
