import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddQuizComponent } from 'src/app/components/add-quiz/add-quiz.component';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizDto } from 'src/app/types';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  quizzes: Array<QuizDto> = [];

  constructor(
    private quizService: QuizService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllQuizzes();
  }

  getAllQuizzes() {
    this.quizService.getAllQuizzes().subscribe((res: Array<QuizDto>) => {
      console.log('res', res);
      this.quizzes = res;
    })
  }

  openAddQuizDialog() {
    const configData = new MatDialogConfig();
    configData.width='60%';
    configData.data = {category: this.quizzes.map(elt => elt.category)}
    const dialogRef = this.dialog.open(AddQuizComponent, configData);
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
      if(result) {
      }
    })
  }

}
