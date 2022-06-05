import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCategoryComponent } from 'src/app/components/add-category/add-category.component';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryDto } from 'src/app/types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Array<CategoryDto> = [];

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllcategories();
  }

  getAllcategories() {
      this.categoryService.getAllcategories().subscribe((catg: Array<CategoryDto>) => {
        console.log('catg', catg);
        this.categories = catg;
      })
  }

  openAddCategoryDialog() {
    const configData = new MatDialogConfig();
    configData.width='45%';
    configData.height='60%';
    const dialogRef = this.dialog.open(AddCategoryComponent, configData);
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
      if(result) {
          this.getAllcategories();
      }
    })
  }

}
