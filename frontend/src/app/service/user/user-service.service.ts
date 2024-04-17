import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/Client';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  getClient(id: String | null): Observable<Client> {
    return this.http.get<Client>(this.url + '/' + id);
  }

  getFilter(column: String, direction: String): Observable<Client[]> {
    return this.http.get<Client[]>(
      this.url + '/sorted?column=' + column + '&direction=' + direction
    );
  }

  postCliente(cliente: Client): Observable<Client> {
    return this.http.post<Client>(this.url, cliente);
  }

  putCliente(cliente: Client): Observable<Client> {
    return this.http.put<Client>(this.url, cliente);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }
}
