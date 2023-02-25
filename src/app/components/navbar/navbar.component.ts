import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user$ = this.authService.currentUser$;
  
  constructor(public authService: AuthenticationService,
    private router: Router){}


    logout() {
      this.authService.logout().subscribe(()=>{
        this.router.navigate(['']);
      });
    }
}
