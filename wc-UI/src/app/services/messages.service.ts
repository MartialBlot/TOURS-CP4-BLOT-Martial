import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Messages } from '../models/messages.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public sendMessage(messagesForm: Messages): Observable <Messages>{
    return this.http.post<Messages>(`${this.api}/messages`, messagesForm);
  }

  public getMessages(id: number): Observable<Messages>{
    return this.http.get(`${this.api}/circus/${id}/messages`).pipe(
      map((messages: any) => { return messages as Messages
      })
      )
  };

  public deleteMessage(id: number): Observable<Messages> {
    return this.http.delete(`${this.api}/messages/${id}`).pipe(
      map((messages: any) => {
        return  messages as Messages;
      }),
    );
  }

}
