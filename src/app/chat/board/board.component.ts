import { MessagesService } from './../../services/messages.service';
import { Message } from './../../message';
import { Component, OnInit, Input, Optional, OnDestroy } from '@angular/core';

@Component({
  selector: 'chat-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  messages: any;
  @Input() currentUser;

  constructor(private messagesService: MessagesService) {
    this.messages = this.messagesService.getMessages();
  }


}
