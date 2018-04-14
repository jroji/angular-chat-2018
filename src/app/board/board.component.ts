import { Message } from './../message';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() messages: Array<Message>;

  constructor() { }

  ngOnInit() {
  }

}
