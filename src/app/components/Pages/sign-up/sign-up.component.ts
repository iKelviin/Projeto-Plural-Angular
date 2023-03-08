import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { UsersService } from 'src/app/services/Users/users.service';


export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  };
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{


  signUpForm = new UntypedFormGroup({
    name: new UntypedFormControl('',Validators.required),
    email: new UntypedFormControl('',[Validators.email,Validators.required]),
    password: new UntypedFormControl('',Validators.required),
    confirmPassword: new UntypedFormControl('',Validators.required)
  },{ validators: passwordMatchValidator()});


  constructor(private authService : AuthenticationService,
    private toast: HotToastService,
    private router: Router,
    private usersService: UsersService){}

  ngOnInit(): void {

  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }

    this.authService
      .signUp(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid, email, displayName: name })
        ),
        this.toast.observe({
          success: 'Cadastro realizado com sucesso!',
          loading: 'Cadastrando...',
          error: 'Senha muito curta ou E-mail invalido.',
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }


}
