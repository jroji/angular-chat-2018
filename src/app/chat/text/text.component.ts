import { MessagesService } from './../../services/messages.service';
import { Message } from './../../message';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input() placeholder: String;
  @Input() buttonLabel: String;
  @Input() currentUser: String;

  private _text: string;

  constructor(private messageService: MessagesService) { }

  /**
   * Emits the event to save it in the app array
   */
  emitEvent() {
    this.messageService.pushMessage({
      message: this._text,
      username: this.currentUser,
      timestamp: new Date().getTime(),
    });
  }

}
