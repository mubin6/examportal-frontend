import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  getSidenavMenu() {
    return [
      {name: 'Home', icon: 'home', path: ''},
      {name: 'Profile', icon: 'portrait', path: 'admin-profile'},
      {name: 'Catagories', icon: 'category', path: 'admin-category'},
      {name: 'Add Catagory', icon: 'add'},
      {name: 'Quizes', icon: 'quiz', path: 'admin-quiz'},
      {name: 'Add Quiz', icon: 'add', path: ''},
    ]
  }
}
