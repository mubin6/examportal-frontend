import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  getUser() {
    this.loginService.generateToken(this.loginForm.value)
    .subscribe((res: {token: string}) => {
      console.log('res', res)
      this.loginService.userToken(res.token);
      this.getCurrentUSer();
    },
    (err) => {
      console.log('err', err);
      this.loginService.openSnackBar('Please enter valid credentials', 'INVALID CREDENTIALS');
    })
  }

  getCurrentUSer() {
    this.loginService.getCurrentUser()
    .subscribe(
      (user: any) => {
        console.log('user', user);
        this.loginService.setUserDetails(user);
        const userRole = this.loginService.getUserRole();
        if(userRole == 'ADMIN') {
          this.router.navigate([`/admin-dashboard`]);
        } else {
          this.router.navigate([`/dashboard`]);
        }

      },
      (err) => {
        console.log('err', err);
        this.loginService.openSnackBar('Please enter valid credentials', 'INVALID CREDENTIALS');
      }
    )
  }

}
