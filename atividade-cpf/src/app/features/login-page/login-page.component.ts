import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  @Input()
  value: string = "";

  cpf = "";
  open: boolean = false
  isSusbcribe = false

  @Output()
  messageEvent: EventEmitter<string> = new EventEmitter();

  constructor(
    private _routes: Router,
    private _activedRoute: ActivatedRoute
  ){
    //serviços e injeção de dependência
  }

  ngOnInit(): void {
    this.openModal()
    this._activedRoute.params.subscribe((param) => {
      // console.log(param['tabs'])
      this.isSusbcribe = param['tab'] == 'subscribe';      
    })
  }

  passwordChange = (value: any) => {

    const stringValue = value.target.value
    console.log(value.target.value);

    this.messageEvent.emit(stringValue);
  }

  cpfChange = (value: string) => {
    this.cpf = value;
  }

  openModal() {
    this.open = true;
  }
}
