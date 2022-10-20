import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<any>('https://rickandmortyapi.com/api/character?page=1');
  }
}
