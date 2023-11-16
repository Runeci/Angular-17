import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export interface CharactersResponse {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: null | number
  },
  results: Character[]
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient = inject(HttpClient);

  public getCharacters(): Observable<CharactersResponse> {
    return this.httpClient.get<CharactersResponse>(BASE_URL + 'character');
  }

  public getCharacter(id: string): Observable<Character> {
    return this.httpClient.get<Character>(BASE_URL + 'character/' + id)
  }
}
