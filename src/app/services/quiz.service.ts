import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuizDto } from '../types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient
  ) { }

  getAllQuizzes() {
    return this.http.get(`${environment.baseUrl}/quiz/`);
  }

  saveCategories(quiz: QuizDto) {
    return this.http.post(`${environment.baseUrl}/quiz/`, quiz);
  }
  updateCategories(quiz: QuizDto) {
    return this.http.put(`${environment.baseUrl}/quiz/`, quiz);
  }
  deleteCategories(quizId: string) {
    return this.http.delete(`${environment.baseUrl}/quiz/${quizId}`);
  }
}
