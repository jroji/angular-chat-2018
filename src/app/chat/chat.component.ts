import { Message } from './../message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  currentUser: String = 'Jon';

  constructor() { }

  setUser(name: String) {
    this.currentUser = name;
  }
}
