import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/observable/of";
import { tap } from 'rxjs/operators';

@Injectable()
export class ContactsService {

  users;
  users$;

  constructor(private httpclient: HttpClient) {
    this.users$ = this.httpclient.get('https://randomuser.me/api/?results=10').pipe(
      tap(data => this.users = data)
    );
  }

  getUsers() {
    return this.users ? Observable.of(this.users) : this.users$;
  }

}
