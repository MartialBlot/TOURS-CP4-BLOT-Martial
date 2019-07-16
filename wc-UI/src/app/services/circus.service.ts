import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CircusService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;


}
