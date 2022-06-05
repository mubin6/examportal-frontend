import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sidenav!: MatSidenav;
  constructor(
  ) { }

  ngOnInit(): void {}

  sidenavDetails(evt: MatSidenav) {
    console.log('evt', evt);
    this.sidenav = evt;

  }

}
