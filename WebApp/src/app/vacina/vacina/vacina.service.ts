import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../../models/Vacina';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VacinaService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }

  save(vacina: Vacina): Observable<any> {
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.post(environment.urlWebAPI + "Vacinas/", vacina)
      .catch((error: any) => Observable.throw(error.error))
  }

  listAll(): Observable<any> {
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.get(environment.urlWebAPI + "Vacinas/")
      .catch((error: any) => Observable.throw(error.error))
  }

  getById(id: number): Observable<any> {
    return this.http.get(environment.urlWebAPI + "Vacinas/" + id)
      .catch((error: any) => Observable.throw(error.error))
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.urlWebAPI + "Vacinas/" + id)
      .catch((error: any) => Observable.throw(error.error))
  }

  edit(vacina: Vacina): Observable<any> {
    return this.http.put(environment.urlWebAPI + "Vacinas/" + vacina.id, vacina)
      .catch((error: any) => Observable.throw(error.error))
  }
}
