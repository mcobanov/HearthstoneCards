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

  getSets(token: string) {
    return this.http.get(`https://us.api.blizzard.com/hearthstone/metadata/sets?access_token=${token}`);
  }

  getCardbacks(token: string) {
    return this.http.get(`https://us.api.blizzard.com/hearthstone/cardbacks?access_token=${token}`)
  }

  getCards(set: string, token: string) {
    return this.http.get(`https://us.api.blizzard.com/hearthstone/cards?set=${set}&access_token=${token}`)
  }
}
