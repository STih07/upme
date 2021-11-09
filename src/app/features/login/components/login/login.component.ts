import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/api/services';
import { Core } from 'src/app/core/state/core.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  })


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) { }


  login() {
    this.authService.loginUsingPOST(this.loginForm.value).subscribe(
      (response) => {
        this.store.dispatch(new Core.SetAccessToken(response.accessToken));
        this.router.navigateByUrl(`/app`);
      }
    );
  }

}
