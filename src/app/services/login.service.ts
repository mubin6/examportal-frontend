import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login, RegistrationDto } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  durationInSeconds = 3;
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  generateToken(loginData: Login) {
    return this.http.post(`${environment.baseUrl}/generate-token`, loginData);
  }

  getUser(userName: string) {
    return this.http.get(`${environment.baseUrl}/user/${userName}`);
  }

  getCurrentUser() {

    return this.http.get(`${environment.baseUrl}/current-user`);
  }

  userToken(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return token ? true:false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setUserDetails(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getUserRole() {
    const user = this.getUserDetails();
    return user?.authorities[0].authority;
  }

  registerUser(registrationDetail: RegistrationDto) {
    return this.http.post(`${environment.baseUrl}/user/`, registrationDetail);
  }

  openSnackBar(msg: string, title?: string) {
    this.snackbar.open(msg, title, {
      duration: this.durationInSeconds * 1000,
    });

  }

}
