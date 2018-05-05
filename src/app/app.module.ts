import { DeactivateGuardGuard } from './deactivate-guard.guard';
import { routes } from './app.routes';
import { MessagesService } from './services/messages.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextComponent } from './chat/text/text.component';
import { BoardComponent } from './chat/board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsService } from './services/contacts.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    BoardComponent,
    ChatComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    AppComponent,
    TextComponent,
    FormsModule,
  ],
  providers: [
    MessagesService,
    ContactsService,
    DeactivateGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
