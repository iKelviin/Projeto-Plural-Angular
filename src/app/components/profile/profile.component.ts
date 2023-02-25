import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { HotToastService } from '@ngneat/hot-toast';
import { concatMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { ImageUploadService } from 'src/app/services/Image-upload/image-upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user$ = this.authService.currentUser$

  constructor(private authService: AuthenticationService, private imageUploadService: ImageUploadService, private toast: HotToastService){}

  uploadImage(event: any, user: User) {
    this.imageUploadService
    .uploadImage(event.target.files[0], `images/profile/${user.uid}`)
    .pipe(
      this.toast.observe({
        loading: 'Fazendo upload...',
        success: 'Imagem alterada com sucesso!',
        error: 'Ocorreu um erro durante a atualização'
      }),
      concatMap((photoURL) => 
      this.authService.updateProfileData({ photoURL }))
    ).subscribe();
  }
}
