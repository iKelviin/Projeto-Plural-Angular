import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { concatMap, switchMap, tap } from 'rxjs/operators';
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

  profileForm = this.fb.group({
    uid: [''],
    displayName: [''],
    firstName: [''],
    lastName: [''],
    occupation: ['']    
  });

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private fb: NonNullableFormBuilder
  ){}

  ngOnInit(): void {
    this.usersService.currentUserProfile$
    .pipe(untilDestroyed(this), tap(console.log))
    .subscribe((user) => {
      this.profileForm.patchValue({ ...user });
    });
  }


  uploadFile(event: any, {uid}: ProfileUser) {
    this.imageUploadService
    .uploadImage(event.target.files[0], `images/profile/${uid}`)
    .pipe(
      this.toast.observe({
        loading: 'Fazendo upload...',
        success: 'Imagem alterada com sucesso!',
        error: 'Ocorreu um erro durante a atualização'
      }),
      switchMap((photoURL) => 
      this.usersService.updateUser({ uid, photoURL }))
    ).subscribe();
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
