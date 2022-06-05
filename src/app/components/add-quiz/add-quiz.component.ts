import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuizService } from 'src/app/services/quiz.service';
import { CategoryDto } from 'src/app/types';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {

  quizForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {category: Array<CategoryDto>},
    private fb: FormBuilder,
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.quizForm = this.fb.group({
      title: [''],
      description: [''],
      maxMarks: [''],
      numberOfQuestions: [''],
      active: [false],
      category:['']
    });
  }

  saveForm() {

  }
  cancel() {
    this.dialogRef.close();
  }

}
