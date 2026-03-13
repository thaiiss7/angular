import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess';
  // count = 0;
  text = "";

  receiveText = (message: string) => {
    // this.count++;
    this.text = message;
  }
}
