import { Message } from './message';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Title of the application
  title = 'Chat board project';
  // Messages array
  messages: Array<Message>;

  /**
   * Initialize the messages array in order to push new messages
   */
  constructor() {
    this.messages = [];
  }

  /**
   * Adds a new message to the messages array
   */
  addMessage(ev) {
    this.messages.push(ev);
    console.log(this.messages);
  }
}
