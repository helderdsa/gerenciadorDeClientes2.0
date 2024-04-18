import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/Client';
import { ClientService } from '../service/client/client-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  client = new Client();
  clients: Client[] = [];
  searchId: String = '';
  columnFilter = '';
  directionFilter = '';

  constructor(private service: ClientService, private router: Router) {}

  list(): void {
    this.service.getClients().subscribe((data) => (this.clients = data));
  }

  search(input: String): void {
    if (input !== '') {
      this.service.getClient(input).subscribe((data) => {
        this.clients = [data];
      });
    } else {
      this.list();
    }
  }

  sort(column: String, direction: String): void {
    this.service
      .getFilter(column, direction)
      .subscribe((data) => (this.clients = data));
  }

  navigate(route: String): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.list();
  }
}
