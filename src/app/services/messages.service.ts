import { AngularFirestore } from 'angularfire2/firestore';
import { Message } from './../message';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessagesService {

  fbMessages;
  messages$;

  constructor(private db: AngularFirestore) {
    this.fbMessages = this.db.collection('messages', ref => ref.orderBy('timestamp'));
    this.messages$ = this.fbMessages.valueChanges();
  }

  getMessages() {
    return this.messages$;
  }

  pushMessage(message: Message) {
    this.fbMessages.add(message);
  }
}
