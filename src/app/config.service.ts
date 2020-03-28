import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

const client_secret = 'aokPLKgE6BwUuCuA24xJX4oQibFeKpvi';
const client_id = 'ab9467838d45488a83a751c2f755103f';

const tokenOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
  })
};

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
  accessToken: string;
  cardbacks: any;

  constructor(private http: HttpClient) {}

  getToken() {
    return this.http.post('https://us.battle.net/oauth/token', 'grant_type=client_credentials', tokenOptions);
  }

  getInfo() {
    return this.http.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', httpOptions);
  }

  getCardbacks(token: Object) {
      this.accessToken = token['access_token'];
      return this.http.get(`https://us.api.blizzard.com/hearthstone/cardbacks?access_token=${this.accessToken}`)
  }
}
