import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { UsersService } from 'src/app/services/Users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user$ = this.usersService.currentUserProfile$;
  
  constructor(public authService: AuthenticationService,
    public usersService: UsersService,
    private router: Router){}


    logout() {
      this.authService.logout().subscribe(()=>{
        this.router.navigate(['']);
      });
    }
}
