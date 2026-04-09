import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Router } from "@angular/router";
import { LoginDto } from '../../domain/UserInterfaces';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../domain/auth.api';

@Component({
  selector: 'app-login-page',
  imports: [
    Header,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(
    private api: AuthApi,
    private router: Router
  ){}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  get Username() {
    return this.loginForm.get("username")
  }

  get Password() {
    return this.loginForm.get("password")
  }

  login = () => {
    if(!this.loginForm.valid)
    {
      alert("Existem campos inválidos!")
      return
    }
    
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value,
    }

    this.api.login(data).subscribe(
      res =>{
        console.log(res)
        sessionStorage.setItem("token", res)
        // location.reload()
      } 
    )

    return this.router.navigate(['/home'])
  }

  subscribe = () => {
    if(!this.loginForm.valid)
    {
      alert("Existem campos inválidos!")
      return
    }
  }
}
