import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cpf-validator',
  templateUrl: './cpf-validator.component.html',
  styleUrls: ['./cpf-validator.component.css']
})
export class CpfValidatorComponent {
  @Input()
  value: string = "";

  @Output()
  messageEvent: EventEmitter<string> = new EventEmitter();

  validate = (value: any) => {
    let cpf = value.target.value;

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false

    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0
    let resto

    // cálculo do 1º dígito
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;

    // cálculo do 2º dígito
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf.charAt(10))) return false;

    console.log('deu boa no cpf')
    return this.messageEvent.emit(cpf);
  }
}
