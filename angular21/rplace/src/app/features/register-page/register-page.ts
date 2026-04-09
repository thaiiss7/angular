import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { AuthApi } from '../../domain/auth.api';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../domain/UserInterfaces';

@Component({
  selector: 'app-register-page',
  imports: [
    Header,
    ReactiveFormsModule,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  constructor(
    private api: AuthApi,
    private router: Router
  ){}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  })

  get Username() {
    return this.loginForm.get("username")
  }

  get Password() {
    return this.loginForm.get("password")
  }

  get RepeatPassword() {
    return this.loginForm.get("repeatPassword")
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

    if(this.Password?.value !== this.RepeatPassword?.value)
    {
      alert("Senhas não coincidem!")
      return
    }

    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value,
    }

    this.api.subscribe(data).subscribe(
      res =>{
        console.log(res)
        // sessionStorage.setItem("token", res)
        // location.reload()
        this.router.navigate(['/home'])
      } 
    )

  }
}
