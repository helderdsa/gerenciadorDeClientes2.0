import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/Client';
import { ClientService } from '../service/client/client-service.service';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css',
})
export class CreateClientComponent {
  client = new Client();
  clients: Client[] = [];
  searchId: String = '';

  constructor(private service: ClientService, private router: Router) {}

  create(): void {
    this.service.postCliente(this.client).subscribe(() => {
      alert('Cliente cadastrado com sucesso!');
      this.navigate('/clients');
    });
  }

  navigate(rota: String): void {
    this.router.navigate([rota]);
  }

  cancel(): void {
    this.client = new Client();
    this.navigate('/clients');
  }
}
