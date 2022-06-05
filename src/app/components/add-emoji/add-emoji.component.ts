import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-emoji',
  templateUrl: './add-emoji.component.html',
  styleUrls: ['./add-emoji.component.scss']
})
export class AddEmojiComponent implements OnInit {

  message = '';

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
  emoji: any;
  constructor(
    public dialogRef: MatDialogRef<AddEmojiComponent>,
  ) { }

  ngOnInit(): void {
  }

  addEmoji(event) {
    // const message = this.categoryForm.controls.description.value
    const { emoji } = this;
    console.log(emoji);
    console.log(`${event.emoji.native}`)

    const text = `${emoji}${event.emoji.native}`;

    this.emoji = text;
    console.log('this.emoji', this.emoji);

    // categoryForm.controls.description.patchValue(text);
    // this.showEmojiPicker = false;
  }

}
