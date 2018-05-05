import { Deactivable } from './../deactivable';
import { ContactsService } from './../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, Deactivable {
  users;

  constructor(private contactsService: ContactsService) {
    this.contactsService.getUsers().subscribe(data => {
      this.users = data['results'];
    });
  }

  ngOnInit() {
  }

  canDeactivate() {
    return true;
  }
}
