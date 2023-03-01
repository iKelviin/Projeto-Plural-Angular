import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';

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
import { NavbarComponent } from './components/Base/navbar/navbar.component';
import { getStorage } from 'firebase/storage';
import { ProfileComponent } from './components/Pages/profile/profile.component';
import { SidebarComponent } from './components/Base/sidebar/sidebar.component';
import { BodyComponent } from './components/Base/body/body.component';
import { ChatComponent } from './components/Pages/chat/chat.component';
import { PassagemTurnoComponent } from './components/Pages/passagem-turno/passagem-turno.component';

import { DateDisplayPipe } from './pipes/date-display.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';
import { DatePipe } from '@angular/common';
import {} from '@angular/material/form-field';
import {} from '@angular/material/input';
import { DateDisplayHeaderPipe } from './pipes/dateDisplayHeader.pipe';
import { SublevelBarComponent } from './components/Base/sidebar/sublevel-bar.component';

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
    PassagemTurnoComponent,
    DateDisplayPipe,
    DateDisplayHeaderPipe,
    SublevelBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HotToastModule.forRoot(),
    MatMenuModule, // adicione o módulo MatMenuModule aos imports
    BrowserAnimationsModule ,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(()=> getStorage()),
    provideFirestore(()=> getFirestore()),
    MatAutocompleteModule,
    MatListModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
