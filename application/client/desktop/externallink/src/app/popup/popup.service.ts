import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PopupService {

  constructor(
private http: HttpClient
  ) { }

GpGetAllValues(category_id): Observable<any> {
 return this.http.get(`/api.stlouisfed.org/fred/category/related?api_key=1d6109900692021b3c0e18d9a1c9591f&category_id=32073&file_type=json`);
}

}