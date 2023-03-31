import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Pages/home/home.component';
import { LandingComponent } from './components/Pages/landing/landing.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { SignUpComponent } from './components/Pages/sign-up/sign-up.component';
import { ProfileComponent } from './components/Pages/profile/profile.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'
import { ChatComponent } from './components/Pages/chat/chat.component';
import { PassagemTurnoComponent } from './components/Pages/passagem-turno/passagem-turno.component';
import { NoteDetailsComponent } from './components/Pages/passagem-turno/note-details/note-details.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirecToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    ...canActivate(redirecToHome)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirecToHome)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirecToHome)
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'chat',
    component: ChatComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'turno',
    component: PassagemTurnoComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'turno/123',
    component: NoteDetailsComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path:'',
    loadChildren: () =>
        import('./components/Pages/Departamentos/impressao/impressao.module')
        .then(m => m.ImpressaoModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
