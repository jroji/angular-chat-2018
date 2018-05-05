import { Deactivable } from './deactivable';
import { ContactComponent } from './contact/contact.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeactivateGuardGuard implements CanDeactivate<Deactivable> {
  canDeactivate(component): any {
    console.log(component.canDeactivate);
    return component.canDeactivate();
  }
}
