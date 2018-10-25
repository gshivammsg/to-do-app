import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Questions} from '../models/question';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  answer: string;
  text: string;

  @Output() questionAdded = new EventEmitter<Questions>();

  constructor() {

  }

  ngOnInit() {
  }

  addQuestions() {
    this.questionAdded.emit({text: this.text, answer: this.answer, hide: true});
  }
}
