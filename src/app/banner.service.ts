import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from './Banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  banners = 'https://5e7a13bd17314d0016133c83.mockapi.io/banner';
  constructor(
    private http: HttpClient
  ) { }

  getBanner(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.banners);
  }

  getBannerByID(id : number): Observable<Banner>{
    return this.http.get<Banner>(`${this.banners}/${id}`)
  }

  updateBanner(banner):Observable<Banner>{
    return this.http.put<Banner>(`${this.banners}/${banner.id}`, banner);
  }

  deteleBanner(id : number): Observable<Banner>{
    return this.http.delete<Banner>(`${this.banners}/${id}`)
  }

  addBanner(banner): Observable<Banner>{
    return this.http.post<Banner>(this.banners, banner);
  }
}
