import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { New } from './new';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  tins = 'https://5e7a13bd17314d0016133c83.mockapi.io/new';
  constructor(
    private http: HttpClient
  ) { }

  getNew(): Observable<New[]> {
    return this.http.get<New[]>(this.tins);
  }

  getNewByID(id : number): Observable<New>{
    return this.http.get<New>(`${this.tins}/${id}`)
  }

  updateBanner(tin):Observable<New>{
    return this.http.put<New>(`${this.tins}/${tin.id}`, tin);
  }

  deteleNew(id : number): Observable<New>{
    return this.http.delete<New>(`${this.tins}/${id}`)
  }

  addNew(tin): Observable<New>{
    return this.http.post<New>(this.tins, tin);
  }
}
