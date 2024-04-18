import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/Client';
import { ClientService } from '../service/client/client-service.service';

@Component({
  selector: 'app-client-modifier',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule],
  templateUrl: './client-modifier.component.html',
  styleUrl: './client-modifier.component.css'
})
export class ClientModifierComponent {
  client = new Client();
  clients: Client[] = [];
  searchId: String = '';

  constructor(
    private service: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  modpfy(): void {
    this.service.putCliente(this.client).subscribe(() => {
      alert('Cliente alterado com sucesso!');
      this.navigate('/clients');
    });
  }

  delete(): void {
    this.service.deleteCliente(this.client.id).subscribe(() => {
      alert('Cliente deletado com sucesso!');
      this.navigate('/clients');
    });
  }

  cancel(): void {
    this.client = new Client();
    this.navigate('/clients');
  }

  navigate(rota: String): void {
    this.router.navigate([rota]);
  }

  ngOnInit(): void {
    const clientId = this.activatedRoute.snapshot.paramMap.get('id');
    this.service
      .getClient(clientId)
      .subscribe((data) => (this.client = data));
  }
}
