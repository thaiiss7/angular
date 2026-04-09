import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { AuthApi } from '../../domain/auth.api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { LoginDto } from '../../domain/UserInterfaces';

@Component({
  selector: 'app-main-page',
  imports: [Header],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  
}
