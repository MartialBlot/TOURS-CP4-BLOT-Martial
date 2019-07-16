import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Messages } from '../models/messages.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public sendMessage(messagesForm: Messages): Observable <Messages>{
    return this.http.post<Messages>(`${this.api}/messages`, messagesForm);
  }

}
