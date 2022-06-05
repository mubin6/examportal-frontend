import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddCategoryComponent } from 'src/app/components/add-category/add-category.component';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @Output() sidenavDetails: EventEmitter<MatSidenav> = new EventEmitter<MatSidenav>();

  menuItem: Array<{name: string, icon: string, path?: string}> = [];
  constructor(
    private observer: BreakpointObserver,
    private sideNavService: SidenavService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.sidenavDetails.next(this.sidenav);
    this.menuItem = this.sideNavService.getSidenavMenu();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe(res => {
      if(res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      this.sidenavDetails.next(this.sidenav);
    })
  }

  navigateTo(path: string) {
    this.router.navigate([`admin-dashboard/${path}`]);
    // this.sidenav.toggle();
  }

  operationOnItemName(itemName: string) {
    if(itemName == 'Add Catagory') this.openAddCategoryDialog();
  }

  openAddCategoryDialog() {
    const configData = new MatDialogConfig();
    configData.width='45%';
    const dialogRef = this.dialog.open(AddCategoryComponent, configData);
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
      this.router.navigate(['/admin-dashboard/admin-category'])
    })
  }

}
