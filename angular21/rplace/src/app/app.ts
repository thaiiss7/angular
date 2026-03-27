import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('rplace');
  protected _date = signal(new Date());

  protected _stringDate: Signal<string> = computed(() => {
    return `${this._date().getFullYear()}-
    ${this._date().getMonth()+1}-
    ${this._date().getDate()}`
  })

  ngOnInit() {
    console.log(this.title());
  }

  // atualizar o valor do signal
  addDay(add: boolean = true) {
    this._date.update((oldValue) => {
      let day = add ? oldValue.getDate() + 1 : oldValue.getDate() - 1;
      let month = oldValue.getMonth();
      let year = oldValue.getFullYear();

      return new Date(year, month, day);
    })
  }
}
