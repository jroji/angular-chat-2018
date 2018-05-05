import { DeactivateGuardGuard } from './deactivate-guard.guard';
import { Injectable } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        component: ChatComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
        canDeactivate: [DeactivateGuardGuard]
    },
    {
        path: 'lazy',
        loadChildren: 'app/lazy/lazy.module#LazyModule',
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
