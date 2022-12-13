import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';



export function passwordsMatchValidator():ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword){
      return{ passwordsDontMatch: true };
    } else {
    return null;
    }
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  },{validators: passwordsMatchValidator()})

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
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

  get name() {
    return this.signUpForm.get('name');
  }

  submit(){
    const {name, email, password} = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !email || !password){
      return;
    } 

    this.authService
    .signUp(email, password)
    .pipe(
      switchMap(({ user: {uid} }) => 
      this.usersService.addUser({uid, email, displayName: name})
      ),
      this.toast.observe({
      success: 'Signed up successfully!',
      loading: 'Signing up..',
      error: ({ message }) => `${message}`,
      })
    )
    .subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
