import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { concatMap } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { ImageUploadService } from 'src/app/services/Image-upload/image-upload.service';
import { UsersService } from 'src/app/services/Users/users.service';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user$ = this.usersService.currentUserProfile$;

  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    occupation: new FormControl(''),
  });

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService
  ){}

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
      });
  }



  uploadImage(event: any, user: ProfileUser) {
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/profile/${user.uid}`)
      .pipe(
        this.toast.observe({
        loading: 'Fazendo upload...',
        success: 'Imagem alterada com sucesso!',
        error: 'Ocorreu um erro durante a atualização',
      }),
      concatMap((photoURL) =>
        this.usersService.updateUser({ uid: user.uid, photoURL })
      )
    )
    .subscribe();
}

  saveProfile() {
    const { uid, ...data } = this.profileForm.value;

    if (!uid) {
      return;
    }

    this.usersService
      .updateUser({ uid, ...data })
      .pipe(
        this.toast.observe({
          loading: 'Saving perfil...',
          success: 'Perfil atualizado com sucesso!',
          error: 'Ocorreu um erro ao atualizar o perfil.',
        })
      )
      .subscribe();
  }

}
