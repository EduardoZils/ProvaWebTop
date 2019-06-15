import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../../models/Animal';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  save(animal: Animal): Observable<any> {
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.post(environment.urlWebAPI + "Animals/", animal)
      .catch((error: any) => Observable.throw(error.error))
  }

  listAll(): Observable<any> {
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.get(environment.urlWebAPI + "Animals/")
      .catch((error: any) => Observable.throw(error.error))
  }

  getById(id: number): Observable<any> {
    return this.http.get(environment.urlWebAPI + "Animals/" + id)
      .catch((error: any) => Observable.throw(error.error))
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.urlWebAPI + "Animals/" + id)
      .catch((error: any) => Observable.throw(error.error))
  }

  edit(animal: Animal): Observable<any> {
    return this.http.put(environment.urlWebAPI + "Animals/" + animal.id, animal)
      .catch((error: any) => Observable.throw(error.error))
  }
}
