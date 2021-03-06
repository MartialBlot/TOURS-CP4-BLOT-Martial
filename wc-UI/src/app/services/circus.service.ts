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

  public getCircus(): Observable<Circus[]>{
    return this.http.get<Circus[]>(`${this.api}/circus`);
  };

  public deleteCircus(id: number): Observable<Circus> {
      return this.http.delete(`${this.api}/circus/${id}`).pipe(
        map((circus: any) => {
          return  circus as Circus;
        }),
      );
    }

  public editCircus(id: string, circusForm: Circus): Observable<Circus> {
    return this.http.put<Circus>(`${this.api}/circus/${id}`, circusForm);
  }

  public getOneCircus(id: number): Observable<Circus>{
    return this.http.get(`${this.api}/circus/${id}`).pipe(
      map((circus: any) => { return circus as Circus
      })
      )
  };

  public createCircus(circusForm: Circus): Observable <Circus>{
    return this.http.post<Circus>(`${this.api}/circus`, circusForm);
  }


}
