import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Questions} from '../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Questions[];

  constructor(private questionService: QuestionService) {

  }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  addedQuestions(question: Questions) {
    this.questionService.addQuestion(question);
  }

}
