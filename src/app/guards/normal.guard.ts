import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {

constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

const isLogin = this.loginService.isLoggedIn();
      const userRole = this.loginService.getUserRole();

      if(isLogin && userRole === 'NORMAL') {
        return true;
      }

      this.router.navigate(['']);
      return false;

  }

}
