import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryDto } from 'src/app/types';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
  set = 'facebook';
  showEmojiPicker = false;
  // message = '';

  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private fb: FormBuilder,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.categoryForm = this.fb.group({
      title: [''],
      description:['']
    });
  }

  saveForm() {
    const category: CategoryDto = this.categoryForm.value;
    this.categoryService.saveCategories(category).subscribe(
      (res: CategoryDto) => {
        console.log('res', res)
        this.dialogRef.close(res);
      },
      (err) => {
        console.log('err', err)
      }
    )
  }

  cancel() {
    this.dialogRef.close();
  }

  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    // const message = this.categoryForm.controls.description.value
    const { categoryForm } = this;
    console.log(categoryForm);
    console.log(`${event.emoji.native}`)
    const text = `${categoryForm.controls.description.value}${event.emoji.native}`;

    // this.message = text;
    categoryForm.controls.description.patchValue(text);
    // this.showEmojiPicker = false;
  }

}
