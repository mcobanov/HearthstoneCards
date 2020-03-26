import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "400778b158mshf5ec7372bccb6cfp1dafeajsn4ed5f898871b"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', httpOptions)
  }
}
