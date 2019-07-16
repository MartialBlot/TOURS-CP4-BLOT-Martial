import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Circus } from '../models/circus.model';

@Injectable({
  providedIn: 'root'
})
export class CircusService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getCircus(): Observable<Circus>{
    return this.http.get(`${this.api}/circus`).pipe(
      map((circus: any) => { return circus as Circus
      })
      )
  };

  public deleteCircus(id: number): Observable<Circus> {
      return this.http.delete(`${this.api}/circus/${id}`).pipe(
        map((circus: any) => {
          return  circus as Circus;
        }),
      );
    }


}
