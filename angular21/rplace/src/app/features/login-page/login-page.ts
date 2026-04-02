import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { RouterLink } from "../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-login-page',
  imports: [Header],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
