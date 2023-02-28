import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; // importe o módulo MatMenuModule
import { MatInputModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

// Routes
import { AppRoutingModule } from './app-routing.module';

// FIREBASE
import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage } from '@angular/fire/storage'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'


//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { SignUpComponent } from './components/Pages/sign-up/sign-up.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { environment } from '../environments/environment';
import { HotToastModule } from '@ngneat/hot-toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { getStorage } from 'firebase/storage';
import { ProfileComponent } from './components/Pages/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { ChatComponent } from './components/Pages/chat/chat.component';
import { PassagemTurnoComponent } from './components/Pages/passagem-turno/passagem-turno.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SidebarComponent,
    BodyComponent,
    ChatComponent,
    PassagemTurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HotToastModule.forRoot(),
    MatMenuModule, // adicione o módulo MatMenuModule aos imports
    BrowserAnimationsModule ,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(()=> getStorage()),
    provideFirestore(()=> getFirestore())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
