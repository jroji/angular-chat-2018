import { Message } from './../message';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input() placeholder: String;
  @Input() buttonLabel: String;

  @Output() clicked = new EventEmitter<Message>();

  private _username: string;
  private _text: string;

  constructor() { }

  /**
   * Emits the event to save it in the app array
   */
  emitEvent() {
    if (!this._username || this._username === '' || !this._text || this._text === '') {
      return;
    }

    this.clicked.emit({
      username: this._username,
      text: this._text
    });

    this._username = '';
    this._text = '';
  }

}
