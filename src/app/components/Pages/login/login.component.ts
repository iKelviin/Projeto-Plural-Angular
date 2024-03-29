import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required,Validators.email]),
    password: new UntypedFormControl('',Validators.required)
  })


  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }
    const {email,password} = this.loginForm.value;
    this.authService.login(email,password).pipe(
      this.toast.observe({
        success: 'Logado com Sucesso!',
        loading: 'Conectando...',
        error: 'Ocorreu um erro.'
      })
    ).subscribe(() =>{
      this.router.navigate(['/home']);
    });

  }
}
