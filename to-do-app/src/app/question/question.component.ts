import {Component, Input, OnInit} from '@angular/core';
import {Questions} from '../models/question';
import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question') question: Questions;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
  }

  removeData(question: Questions) {
     this.questionService.removeData(question);
  }

}
