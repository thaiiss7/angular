import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess';
  count = 0;
  text = "";

  foiClickado = () => {
    this.count++;
  }

  // o pai recebe a mudança no evento do filho input e armazena esse valor em text
  updateText = (event: string) => {
    console.log("atualizando");
    this.text = event;
  }
}
