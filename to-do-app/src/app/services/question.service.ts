import {Injectable} from '@angular/core';
import {Questions} from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Questions[] = [];

  constructor() {
  }

  getQuestions() {
    // if (localStorage.getItem('questions') === null) {
    //   this.questions = [];
    // } else {
    //   this.questions = JSON.parse(localStorage.getItem('questions'));
    // }
    return this.questions;
  }

  addQuestion(question: Questions) {
    this.questions.unshift(question);

    let questions;
    if (localStorage.getItem('questions') === null) {
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(question));
    }


  }

  removeData(question: Questions) {
    console.log(this.questions);
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        console.log(this.questions[i]);
        this.questions.splice(i, 1);
      }
    }
  }
}
