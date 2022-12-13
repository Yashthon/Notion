import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProfileUser } from 'src/app/models/user-profile';
import { ErrorStateMatcher } from '@angular/material/core';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup = new FormGroup({}); 
    user$ = this.usersService.currentUserProfile$;

    profileForm = new FormGroup({
    uid: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    displayName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.usersService.currentUserProfile$
    .pipe(
      untilDestroyed(this), tap(console.log))
    .subscribe((user) =>   {
      this.profileForm.patchValue({ ...user });
    });
    // this.profileForm = this.fb.group({
    //   phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]]
    // });
  }

  // _keyPress(event: any) {
  //   const pattern = /[0-9]/;
  //   let inputChar = String.fromCharCode(event.charCode);
  //   if (!pattern.test(inputChar)) {
  //       event.preventDefault();
  //   }
  // }
  
  uploadImage(event: any, { uid }: ProfileUser){
    this.imageUploadService
    .uploadImage(event.target.files[0], `images/profile/${uid}`)
    .pipe(
      this.toast.observe({
          loading: "Image is being uploaded",
          success: "Image uploaded",
          error: "There was an error uploading the image"
        }),
      switchMap((photoURL) => 
      this.usersService.updateUser({
        uid,
        photoURL 
      })
      )
    )
    .subscribe();
  }

  saveProfile(){
    const { uid, ...data } = this.profileForm.value;
    if (!uid){
      return;
    }
    this.usersService
    // .updateUser({ uid, ...data })
    .updateUser({uid})
    .pipe(
      this.toast.observe({
        loading: "Updating the data",
        success: "Data updated",
        error: "There was an error upating the data"
      })
    ).subscribe();
  }
  
}
