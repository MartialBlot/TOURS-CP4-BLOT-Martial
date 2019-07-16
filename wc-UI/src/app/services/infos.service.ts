import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Infos } from '../models/infos.model';

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getInfos(id): Observable<Infos>{
    return this.http.get(`${this.api}/circus/${id}/infos`).pipe(
      map((infos: any) => { return infos as Infos
      })
      )
  };

  public deleteInfos(id: number): Observable<Infos> {
    return this.http.delete(`${this.api}/infos/${id}`).pipe(
      map((infos: any) => {
        return  infos as Infos;
      }),
    );
  }

  public editInfos(id: string, infosForm: Infos): Observable<Infos> {
    return this.http.put<Infos>(`${this.api}/infos/${id}`, infosForm);
  }

  public getOneInfos(id: number): Observable<Infos>{
    return this.http.get(`${this.api}/infos/${id}`).pipe(
      map((infos: any) => { return infos as Infos
      })
      )
  };

  public createInfos(infosForm: Infos): Observable <Infos>{
    return this.http.post<Infos>(`${this.api}/infos`, infosForm);
  }
}
