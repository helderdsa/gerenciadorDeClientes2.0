import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientModifierComponent } from './client-modifier/client-modifier.component';

export const routes: Routes = [
  {path: 'clients', component: HomeComponent, title: 'Home'},
  {path: 'clients/create', component: CreateClientComponent, title: 'Criar usuario'},
  {path: 'clients/modify/:id', component: ClientModifierComponent, title: 'Modificar usuario'},
];
