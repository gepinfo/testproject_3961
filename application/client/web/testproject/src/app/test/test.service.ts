import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class TestService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.WEB_API;


  PostAlltestValues(data:any){
    return this.http.post(`${this.BaseURL}/test`,data);
  }

  GetAlltestValues(){
    return this.http.get(`${this.BaseURL}/test`);
  }

  Updatetest(data:any){
    return this.http.put(`${this.BaseURL}/test/${data.id}`,data);
  }

  getSpecifictest(id:number){
    return this.http.get(`${this.BaseURL}/test/${id}`);
  }

  getSpecifictestHistory(id:number){
    return this.http.get(`${this.BaseURL}/test/${id}/history?days=30`);
  }

  DeletetestValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/test/${dataId}`);
  }

  GetEntityById(testId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/testid/` + testId);
  }

  Searchtest(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/test/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}